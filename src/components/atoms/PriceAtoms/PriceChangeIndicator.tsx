import {cn} from "../../../utils/cn.ts";

interface PriceChangeIndicatorProps {
    value: number;
    showIcon?: boolean;
    className?: string;
}

export const PriceChangeIndicator: React.FC<PriceChangeIndicatorProps> = ({
  value,
  showIcon = true,
  className
}) => {
    const isPositive = value >= 0;
    const colorClass = isPositive ? 'text-positive' : 'text-negative';
    const formattedValue = `${isPositive ? '+' : ''}${value.toFixed(2)}%`;

    return (
        <div className={cn('flex items-center text-sm font-medium', colorClass, className)}>
            {showIcon && (
                <span className="mr-1">
          {isPositive ? '▲' : '▼'}
        </span>
            )}
            {formattedValue}
        </div>
    );
};