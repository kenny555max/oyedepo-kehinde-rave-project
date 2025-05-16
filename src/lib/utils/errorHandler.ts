import { AxiosError } from 'axios';
import { showToast } from '../context/ToastContext.tsx';
import type {ApiError, ApiResponse} from "../../types.ts";

/**
 * Centralized error handler for API errors
 * @param error - The error object from axios
 * @returns Standardized ApiError object
 */
export const handleApiError = (error: AxiosError): ApiError => {
    let errorMessage = 'An unexpected error occurred';
    let errorCode = 'UNKNOWN_ERROR';
    let statusCode = 500;

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        statusCode = error.response.status;

        try {
            const responseData = error.response.data as any;
            errorMessage = responseData.message || responseData.error || 'Server error';
            errorCode = responseData.code || `ERROR_${statusCode}`;
        } catch (e) {
            errorMessage = `Server error (${statusCode})`;
            errorCode = `ERROR_${statusCode}`;
        }

        // Handle common status codes
        switch (statusCode) {
            case 401:
                errorMessage = 'Authentication required. Please log in again.';
                errorCode = 'UNAUTHORIZED';
                // Optionally trigger a logout here
                // logoutUser();
                break;
            case 403:
                errorMessage = 'You don\'t have permission to access this resource.';
                errorCode = 'FORBIDDEN';
                break;
            case 404:
                errorMessage = 'The requested resource was not found.';
                errorCode = 'NOT_FOUND';
                break;
            case 429:
                errorMessage = 'Too many requests. Please try again later.';
                errorCode = 'RATE_LIMITED';
                break;
        }
    } else if (error.request) {
        // The request was made but no response was received
        errorMessage = 'No response from server. Please check your connection.';
        errorCode = 'NO_RESPONSE';
        statusCode = 0;
    } else {
        // Something happened in setting up the request
        errorMessage = error.message || 'Error setting up the request';
        errorCode = 'REQUEST_SETUP_ERROR';
    }

    // Display error toast (if the error is user-facing)
    showToast({
        type: 'error',
        title: 'Error',
        message: errorMessage,
    });

    // Return standardized error object
    return {
        message: errorMessage,
        code: errorCode,
        statusCode,
    };
};

/**
 * Process API error and determine if it should be shown to the user
 * @param error - API error object
 * @param options - Options for error handling
 */
export const processApiError = <T>(
    error: any,
    options: {
        showToast?: boolean;
        fallbackData?: T;
        onError?: (error: ApiError) => void;
    } = {}
): ApiResponse<T> => {
    const { showToast = true, fallbackData, onError } = options;

    // Ensure the error is in our expected format
    const apiError: ApiError = error.code && error.message && error.statusCode
        ? error
        : handleApiError(error);

    if (showToast) {
        // Already handled in handleApiError
    }

    if (onError) {
        onError(apiError);
    }

    return {
        success: false,
        error: apiError.message,
        statusCode: apiError.statusCode,
        data: fallbackData,
    };
};

export default {
    handleApiError,
    processApiError,
};