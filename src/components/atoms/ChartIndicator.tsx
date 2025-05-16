import React from 'react';
import {cn} from "../../lib/utils/cn.ts";

interface ChartIndicatorProps {
    label: string;
    value: string | number;
    color?: string;
    dotSize?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const ChartIndicator: React.FC<ChartIndicatorProps> = ({
  label,
  value,
  color = 'text-text-primary',
  dotSize = 'md',
  className
}) => {
    const dotSizeClasses = {
        sm: 'w-2 h-2',
        md: 'w-3 h-3',
        lg: 'w-4 h-4'
    };

    return (
        <div className={cn("inline-flex items-center gap-2", className)}>
            <div
                className={cn(
                    "rounded-full",
                    dotSizeClasses[dotSize]
                )}
                style={{ backgroundColor: color }}
            />
            <span className="text-xs text-text-secondary">{label}:</span>
            <span className={cn("text-xs font-medium", color)}>{value}</span>
        </div>
    );
};