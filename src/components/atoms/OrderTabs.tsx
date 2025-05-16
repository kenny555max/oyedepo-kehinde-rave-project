import React from 'react';
import {cn} from "../../lib/utils/cn.ts";

export type OrderType = 'Limit' | 'Market' | 'Stop-Limit';

interface OrderTabsProps {
    types: OrderType[];
    activeType: OrderType;
    onChange: (type: OrderType) => void;
    className?: string;
}

export const OrderTabs: React.FC<OrderTabsProps> = ({
    types,
    activeType,
    onChange,
    className
}) => {
    return (
        <div className={cn("flex w-full border-b border-primary-border", className)}>
            {types.map((type) => (
                <button
                    key={type}
                    className={cn(
                        "px-4 py-2 text-sm font-medium",
                        "transition-colors duration-150",
                        activeType === type
                            ? "text-text-primary border-b-2 border-accent -mb-px"
                            : "text-text-secondary hover:text-text-primary"
                    )}
                    onClick={() => onChange(type)}
                >
                    {type}
                </button>
            ))}
        </div>
    );
};