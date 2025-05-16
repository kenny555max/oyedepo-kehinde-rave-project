import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    suffix?: React.ReactNode;
    helpText?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
    label,
    suffix,
    helpText,
    className,
    ...props
}) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between items-center mb-1">
                {label && (
                    <label className="text-sm text-text-secondary">
                        {label} {props.required && <span className="text-negative">*</span>}
                    </label>
                )}
                {helpText && <div className="text-sm text-text-secondary">{helpText}</div>}
            </div>
            <div className="relative w-full">
                <input
                    className={`w-full bg-primary-bg text-text-primary border border-secondary-border rounded px-3 py-2 focus:outline-none focus:border-accent ${
                        suffix ? 'pr-10' : ''
                    } ${className || ''}`}
                    {...props}
                />
                {suffix && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
                        0.00 {suffix}
                    </div>
                )}
            </div>
        </div>
    );
};