import React from 'react';
import {cn} from "../../lib/utils/cn.ts";

interface CurrencyLabelProps {
    base: string;
    quote: string;
    size?: 'sm' | 'md' | 'lg';
    showIcons?: boolean;
    className?: string;
}

export const CurrencyLabel: React.FC<CurrencyLabelProps> = ({
    base,
    quote,
    size = 'md',
    showIcons = true,
    className
}) => {
    const sizeClasses = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-lg font-bold'
    };

    // Currency icon map
    const getCurrencyIcon = (currency: string) => {
        switch (currency.toUpperCase()) {
            case 'BTC':
                return (
                    <div className="w-5 h-5 rounded-full bg-[#F7931A] flex items-center justify-center text-white font-bold text-xs">
                        ₿
                    </div>
                );
            case 'USDT':
                return (
                    <div className="w-5 h-5 rounded-full bg-[#26A17B] flex items-center justify-center text-white font-bold text-xs">
                        ₮
                    </div>
                );
            case 'ETH':
                return (
                    <div className="w-5 h-5 rounded-full bg-[#627EEA] flex items-center justify-center text-white font-bold text-xs">
                        Ξ
                    </div>
                );
            default:
                return (
                    <div className="w-5 h-5 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold text-xs">
                        {currency.charAt(0)}
                    </div>
                );
        }
    };

    const baseIcon = showIcons ? getCurrencyIcon(base) : null;
    const quoteIcon = showIcons ? getCurrencyIcon(quote) : null;

    return (
        <div className={cn('flex items-center', className)}>
            {showIcons && (
                <div className="flex mr-2">
                    {baseIcon}
                    {quoteIcon && (
                        <div className="-ml-1 -mt-1">
                            {quoteIcon}
                        </div>
                    )}
                </div>
            )}
            <div className={cn('font-medium', sizeClasses[size])}>
                <span className="text-text-primary">{base}</span>
                <span className="text-text-secondary">/{quote}</span>
            </div>
        </div>
    );
};