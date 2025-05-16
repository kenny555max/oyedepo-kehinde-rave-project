import axios, {type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, AxiosError } from 'axios';
import { handleApiError } from '../utils/errorHandler';
import type {ApiResponse} from "../../types.ts";

// Create base axios instance
const createApiClient = (baseURL: string): AxiosInstance => {
    const client = axios.create({
        baseURL,
        timeout: 30000, // 30 seconds
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Request interceptor
    client.interceptors.request.use(
        (config) => {
            // Get token from localStorage or other storage
            const token = localStorage.getItem('auth_token');

            // If token exists, add it to the headers
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Response interceptor
    client.interceptors.response.use(
        (response: AxiosResponse) => {
            // Transform successful responses to our ApiResponse format
            return {
                success: true,
                data: response.data,
                statusCode: response.status,
            };
        },
        (error: AxiosError) => {
            // Process errors through our centralized error handler
            return Promise.reject(handleApiError(error));
        }
    );

    return client;
};

// Create API instance with the base URL from environment
const apiClient = createApiClient(process.env.REACT_APP_API_BASE_URL || 'https://api.binance.com/api/v3/klines');

// Export typed methods for easier use
export const apiService = {
    get: async <T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> => {
        // eslint-disable-next-line no-useless-catch
        try {
            const config: AxiosRequestConfig = { params };
            const response = await apiClient.get<T>(url, config);
            return response as unknown as ApiResponse<T>;
        } catch (error) {
            throw error;
        }
    },

    post: async <T>(url: string, data: any, params?: Record<string, any>): Promise<ApiResponse<T>> => {
        // eslint-disable-next-line no-useless-catch
        try {
            const config: AxiosRequestConfig = { params };
            const response = await apiClient.post<T>(url, data, config);
            return response as unknown as ApiResponse<T>;
        } catch (error) {
            throw error;
        }
    },

    put: async <T>(url: string, data: any, params?: Record<string, any>): Promise<ApiResponse<T>> => {
        // eslint-disable-next-line no-useless-catch
        try {
            const config: AxiosRequestConfig = { params };
            const response = await apiClient.put<T>(url, data, config);
            return response as unknown as ApiResponse<T>;
        } catch (error) {
            throw error;
        }
    },

    delete: async <T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> => {
        // eslint-disable-next-line no-useless-catch
        try {
            const config: AxiosRequestConfig = { params };
            const response = await apiClient.delete<T>(url, config);
            return response as unknown as ApiResponse<T>;
        } catch (error) {
            throw error;
        }
    },
};

export default apiService;