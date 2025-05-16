import React, { createContext, useContext, useState, useCallback } from 'react';
import type {ToastContextType, Toast, ToastType} from "../../types.ts";

// Create context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Generate a unique ID for each toast
const generateId = (): string => {
    return Math.random().toString(36).substring(2, 15);
};

// Singleton for displaying toasts outside of component tree
// @ts-ignore
let toastHandler: ((toast: Omit<Toast, 'id'>) => void) | null = null;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    // Show a toast notification
    const showToast = useCallback((toast: Omit<Toast, 'id'>) => {
        const id = generateId();
        const newToast: Toast = {
            ...toast,
            id,
            duration: toast.duration || getDefaultDuration(toast.type),
        };

        setToasts((prevToasts) => [...prevToasts, newToast]);

        // Auto-dismiss toast after duration
        if (newToast.duration && newToast.duration > 0) {
            setTimeout(() => {
                hideToast(id);
            }, newToast.duration);
        }

        return id;
    }, []);

    // Hide a toast notification
    const hideToast = useCallback((id: string) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, []);

    // Set the handler for the singleton
    React.useEffect(() => {
        toastHandler = showToast;

        return () => {
            toastHandler = null;
        };
    }, [showToast]);

    const value = {
        toasts,
        showToast,
        hideToast,
    };

    return (
        <ToastContext.Provider value={value}>
            {children}
        </ToastContext.Provider>);
};

// Get default duration based on toast type
const getDefaultDuration = (type: ToastType): number => {
    switch (type) {
        case 'success':
            return 3000;
        case 'error':
            return 5000;
        case 'warning':
            return 4000;
        case 'info':
            return 3000;
        default:
            return 3000;
    }
};

// Custom hook to use the toast context
export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);

    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }

    return context;
};

// // Function to show toast outside of React components
export const showToast = (toast: Omit<Toast, 'id'>): void => {
    if (toastHandler) {
        // @ts-ignore
        return toastHandler(toast);
    }

    console.warn('Toast handler not initialized. Make sure ToastProvider is mounted.');
    return undefined;
};

export default ToastContext;