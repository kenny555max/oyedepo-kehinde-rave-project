import React from 'react';
import { cn } from '../../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonColor = 'accent' | 'positive' | 'negative' | 'neutral';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
    fullWidth?: boolean;
    active?: boolean;
    children: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  color = 'accent',
  fullWidth = false,
  active = false,
  children,
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
    const sizeClasses = {
        sm: 'text-xs py-1 px-2',
        md: 'text-sm py-2 px-3',
        lg: 'text-base py-2.5 px-4'
    };

    const colorClasses = {
        accent: {
            primary: 'bg-accent text-white hover:bg-accent/90',
            secondary: 'bg-accent/10 text-accent hover:bg-accent/20',
            outline: 'border border-accent text-accent hover:bg-accent/10',
            text: 'text-accent hover:bg-accent/10'
        },
        positive: {
            primary: 'bg-positive text-white hover:bg-positive/90',
            secondary: 'bg-positive/10 text-positive hover:bg-positive/20',
            outline: 'border border-positive text-positive hover:bg-positive/10',
            text: 'text-positive hover:bg-positive/10'
        },
        negative: {
            primary: 'bg-negative text-white hover:bg-negative/90',
            secondary: 'bg-negative/10 text-negative hover:bg-negative/20',
            outline: 'border border-negative text-negative hover:bg-negative/10',
            text: 'text-negative hover:bg-negative/10'
        },
        neutral: {
            primary: 'bg-secondary-border text-text-primary hover:bg-hover-bg',
            secondary: 'bg-disabled-bg text-text-secondary hover:bg-hover-bg',
            outline: 'border border-secondary-border text-text-primary hover:bg-hover-bg',
            text: 'text-text-secondary hover:bg-hover-bg'
        }
    };

    const activeClasses = active ? 'bg-active-bg border-accent' : '';

    return (
        <button
            className={cn(
                'rounded flex items-center justify-center font-medium transition-colors',
                sizeClasses[size],
                colorClasses[color][variant],
                fullWidth ? 'w-full' : '',
                activeClasses,
                className
            )}
            {...props}
        >
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
    );
};
