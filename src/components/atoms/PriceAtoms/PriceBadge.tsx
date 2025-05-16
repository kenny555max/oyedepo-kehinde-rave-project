import React from 'react';
import { cn } from '../../../lib/utils/cn.ts';

type PriceBadgeVariant = 'primary' | 'secondary';

interface PriceBadgeProps {
    price: string | number;
    variant?: PriceBadgeVariant;
    currency?: string;
    className?: string;
}

export const PriceBadge: React.FC<PriceBadgeProps> = ({
  price,
  variant = 'primary',
  currency,
  className
}) => {
    return (
        <div className={cn(
            'font-medium',
            variant === 'primary' ? 'text-lg text-text-primary' : 'text-sm text-text-secondary',
            className
        )}>
            {price}
            {currency && <span className="ml-1 text-text-secondary">{currency}</span>}
        </div>
    );
};