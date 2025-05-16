import React from 'react';
import {cn} from "../../lib/utils/cn.ts";

interface PercentageChangeProps {
    value: number;
    showIcon?: boolean;
    showSign?: boolean;
    iconOnly?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const PercentageChange: React.FC<PercentageChangeProps> = ({
  value,
  showIcon = true,
  showSign = true,
  iconOnly = false,
  size = 'md',
  className
}) => {
    const isPositive = value >= 0;
    const absValue = Math.abs(value);

    const sizeClasses = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base'
    };

    return (
        <div
            className={cn(
                "flex items-center",
                isPositive ? "text-positive" : "text-negative",
                sizeClasses[size],
                className
            )}
        >
            {showIcon && (
                <span className="mr-0.5">
          {isPositive ? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L10 7H2L6 3Z" fill="currentColor" />
              </svg>
          ) : (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L2 5H10L6 9Z" fill="currentColor" />
              </svg>
          )}
        </span>
            )}
            {!iconOnly && (
                <span>
          {showSign && (isPositive ? '+' : '-')}
                    {absValue.toFixed(2)}%
        </span>
            )}
        </div>
    );
};