import React, { createContext, useContext, type ReactNode } from 'react';
import type {ApiContextType, ApiResponse} from '../../types';
import { apiService } from '../api/apiClient';
import { processApiError } from '../utils/errorHandler';

// Create the API context
const ApiContext = createContext<ApiContextType | undefined>(undefined);

// Create provider component
export const ApiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Wrapper functions to standardize API responses and error handling
    const get = async <T,>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> => {
        try {
            return await apiService.get<T>(url, params);
        } catch (error) {
            return processApiError<T>(error);
        }
    };

    const post = async <T,>(
        url: string,
        data: any,
        params?: Record<string, any>
    ): Promise<ApiResponse<T>> => {
        try {
            return await apiService.post<T>(url, data, params);
        } catch (error) {
            return processApiError<T>(error);
        }
    };

    const put = async <T,>(
        url: string,
        data: any,
        params?: Record<string, any>
    ): Promise<ApiResponse<T>> => {
        try {
            return await apiService.put<T>(url, data, params);
        } catch (error) {
            return processApiError<T>(error);
        }
    };

    const del = async <T,>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> => {
        try {
            return await apiService.delete<T>(url, params);
        } catch (error) {
            return processApiError<T>(error);
        }
    };

    const value: ApiContextType = {
        get,
        post,
        put,
        delete: del,
    };

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

// Custom hook to use the api context
export const useApi = (): ApiContextType => {
    const context = useContext(ApiContext);

    if (context === undefined) {
        throw new Error('useApi must be used within an ApiProvider');
    }

    return context;
};

export default ApiContext;