import React from 'react';
import {cn} from "../../utils/cn.ts";

export type StatusType = 'success' | 'warning' | 'error' | 'info' | 'neutral';

interface StatusIndicatorProps {
    status: StatusType;
    label: string;
    showIcon?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
    status,
    label,
    showIcon = true,
    size = 'md',
    className
}) => {
    const statusConfig = {
        success: {
            color: 'text-positive',
            bgColor: 'bg-positive/10',
            icon: (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        warning: {
            color: 'text-[#FFC107]',
            bgColor: 'bg-[#FFC107]/10',
            icon: (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2V7M6 9V9.01M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            )
        },
        error: {
            color: 'text-negative',
            bgColor: 'bg-negative/10',
            icon: (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L9 9M3 9L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            )
        },
        info: {
            color: 'text-accent',
            bgColor: 'bg-accent/10',
            icon: (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8V6M6 4V4.01M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            )
        },
        neutral: {
            color: 'text-text-secondary',
            bgColor: 'bg-secondary-border/30',
            icon: (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 3.5L3.5 8.5M3.5 3.5L8.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            )
        }
    };

    const sizeClasses = {
        sm: 'text-xs py-0.5 px-1.5',
        md: 'text-sm py-1 px-2',
        lg: 'text-base py-1.5 px-3'
    };

    const { color, bgColor, icon } = statusConfig[status];

    return (
        <div
            className={cn(
                "inline-flex items-center rounded",
                color,
                bgColor,
                sizeClasses[size],
                className
            )}
        >
            {showIcon && (
                <span className="mr-1">
          {icon}
        </span>
            )}
            <span className="font-medium">{label}</span>
        </div>
    );
};