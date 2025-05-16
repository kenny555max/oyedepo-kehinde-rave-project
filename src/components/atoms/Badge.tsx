import {cn} from "../../utils/cn.ts";

type BadgeVariant = 'filled' | 'outline' | 'subtle';
type BadgeColor = 'accent' | 'positive' | 'negative' | 'neutral';

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    color?: BadgeColor;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'subtle',
    color = 'neutral',
    className
}) => {
    const colorClasses = {
        accent: {
            filled: 'bg-accent text-white',
            outline: 'border border-accent text-accent',
            subtle: 'bg-accent/10 text-accent'
        },
        positive: {
            filled: 'bg-positive text-white',
            outline: 'border border-positive text-positive',
            subtle: 'bg-positive/10 text-positive'
        },
        negative: {
            filled: 'bg-negative text-white',
            outline: 'border border-negative text-negative',
            subtle: 'bg-negative/10 text-negative'
        },
        neutral: {
            filled: 'bg-secondary-border text-text-primary',
            outline: 'border border-secondary-border text-text-secondary',
            subtle: 'bg-disabled-bg text-text-secondary'
        }
    };

    return (
        <span
            className={cn(
                'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium',
                colorClasses[color][variant],
                className
            )}
        >
      {children}
    </span>
    );
};