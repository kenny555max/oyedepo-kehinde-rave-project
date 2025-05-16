import {cn} from "../../../lib/utils/cn.ts";

interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    labelPosition?: 'left' | 'right';
    className?: string;
    labelClassName?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    labelPosition = 'right',
    className,
    labelClassName,
    ...props
}) => {
    return (
        <label className={cn('flex items-center cursor-pointer', className)}>
            {label && labelPosition === 'left' && (
                <span className={cn('text-sm text-text-secondary mr-2', labelClassName)}>{label}</span>
            )}
            <div className="relative flex items-center">
                <input
                    type="radio"
                    className={cn(
                        'w-4 h-4 rounded-full border border-secondary-border bg-transparent',
                        'checked:border-accent focus:ring-accent',
                        'appearance-none cursor-pointer'
                    )}
                    {...props}
                />
                <div className="absolute left-0 top-0 w-4 h-4 flex items-center justify-center pointer-events-none">
                    {props.checked && (
                        <div className="w-2 h-2 rounded-full bg-accent" />
                    )}
                </div>
            </div>
            {label && labelPosition === 'right' && (
                <span className={cn('text-sm text-text-secondary ml-2', labelClassName)}>{label}</span>
            )}
        </label>
    );
};