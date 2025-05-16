import React, { useState, useRef, useEffect } from 'react';

interface DropdownOption {
    value: string;
    label: string;
}

interface DropdownProps {
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
    label?: string;
    helpIcon?: boolean;
    className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  label,
  helpIcon,
  className,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(option => option.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`relative ${className || ''}`} ref={dropdownRef}>
            <div className="flex justify-between items-center mb-1">
                {label && <span className="text-sm text-text-secondary">{label}</span>}
            </div>
            <button
                type="button"
                className="w-full flex justify-between items-center bg-primary-bg border border-secondary-border rounded px-3 py-2 text-text-primary"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedOption?.label || 'Select option'}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-primary-bg border border-secondary-border rounded shadow-lg">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            className={`w-full text-left px-3 py-2 hover:bg-hover-bg ${
                                option.value === value ? 'bg-hover-bg text-text-primary' : 'text-text-secondary'
                            }`}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
            {helpIcon && (
                <button
                    type="button"
                    className="absolute right-10 top-[38px] text-text-secondary hover:text-text-primary"
                    onClick={(e) => {
                        e.stopPropagation();
                        // Show help tooltip logic here
                    }}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            )}
        </div>
    );
};