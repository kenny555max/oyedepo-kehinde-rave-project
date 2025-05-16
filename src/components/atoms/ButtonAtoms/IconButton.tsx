import {cn} from "../../../lib/utils/cn.ts";

interface IconButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'ghost';
    className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  active = false,
  disabled = false,
  size = 'md',
  variant = 'default',
  className
}) => {
    const sizeClasses = {
        sm: 'p-1',
        md: 'p-2',
        lg: 'p-3'
    };

    const variantClasses = {
        'default': active
            ? 'bg-active-bg text-text-primary'
            : 'text-text-secondary hover:bg-hover-bg hover:text-text-primary',
        'ghost': active
            ? 'text-text-primary'
            : 'text-text-secondary hover:text-text-primary'
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(
                'rounded flex items-center justify-center transition-colors',
                sizeClasses[size],
                variantClasses[variant],
                disabled ? 'opacity-50 cursor-not-allowed' : '',
                className
            )}
        >
            {icon}
        </button>
    );
};