import {cn} from "../../utils/cn.ts";

interface GradientProgressBarProps {
    value: number; // 0-100
    className?: string;
    height?: number;
}

export const GradientProgressBar: React.FC<GradientProgressBarProps> = ({
    value,
    className,
    height = 4
}) => {
// Ensure value is between 0-100
    const normalizedValue = Math.min(100, Math.max(0, value));

    return (
        <div
            className={cn(
                'w-full bg-disabled-bg rounded-full overflow-hidden',
                className
            )}
            style={{ height: `${height}px` }}
        >
            <div
                className="bg-accent-gradient h-full rounded-full"
                style={{ width: `${normalizedValue}%` }}
            />
        </div>
    );
};