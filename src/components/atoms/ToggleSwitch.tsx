import React from 'react';
import {cn} from "../../utils/cn.ts";

interface ToggleSwitchProps {
    enabled: boolean;
    onChange: (enabled: boolean) => void;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  enabled,
  onChange,
  label,
  size = 'md',
  className,
  disabled = false
}) => {
    const sizeConfig = {
        sm: {
            switch: 'w-8 h-4',
            dot: 'w-3 h-3 translate-x-0.5',
            dotActive: 'translate-x-4',
            label: 'text-xs'
        },
        md: {
            switch: 'w-10 h-5',
            dot: 'w-4 h-4 translate-x-0.5',
            dotActive: 'translate-x-5',
            label: 'text-sm'
        },
        lg: {
            switch: 'w-12 h-6',
            dot: 'w-5 h-5 translate-x-0.5',
            dotActive: 'translate-x-6',
            label: 'text-base'
        }
    };

    const { switch: switchSize, dot: dotSize, dotActive, label: labelSize } = sizeConfig[size];

    return (
        <div className={cn("flex items-center", className)}>
            <button
                type="button"
                role="switch"
                aria-checked={enabled}
                disabled={disabled}
                onClick={() => !disabled && onChange(!enabled)}
                className={cn(
                    "relative inline-flex shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out",
                    switchSize,
                    {
                        "bg-accent": enabled && !disabled,
                        "bg-secondary-border": !enabled && !disabled,
                        "bg-disabled-bg opacity-50 cursor-not-allowed": disabled
                    }
                )}
            >
        <span
            className={cn(
                "pointer-events-none inline-block rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out",
                dotSize,
                enabled ? dotActive : ""
            )}
        />
            </button>
            {label && (
                <span
                    className={cn(
                        "ml-2",
                        labelSize,
                        disabled ? "text-text-secondary" : "text-text-primary"
                    )}
                >
          {label}
        </span>
            )}
        </div>
    );
};