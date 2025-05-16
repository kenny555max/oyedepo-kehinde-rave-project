import React from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: React.ReactNode;
    helpIcon?: boolean;
    onHelpClick?: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
                                                      label,
                                                      helpIcon,
                                                      onHelpClick,
                                                      className,
                                                      ...props
                                                  }) => {
    return (
        <label className={`flex items-center cursor-pointer ${className || ''}`}>
            <div className="relative">
                <input
                    type="checkbox"
                    className="sr-only"
                    {...props}
                />
                <div className={`w-4 h-4 border ${props.checked ? 'bg-accent border-accent' : 'border-secondary-border bg-primary-bg'} rounded transition-colors`}>
                    {props.checked && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>
            </div>
            {label && <span className="ml-2 text-text-primary text-sm">{label}</span>}
            {helpIcon && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        if (onHelpClick) onHelpClick();
                    }}
                    className="ml-1 text-text-secondary hover:text-text-primary"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            )}
        </label>
    );
};