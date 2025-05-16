import React from 'react';
import {cn} from "../../lib/utils/cn.ts";

interface CurrencyPairBadgeProps {
    baseCurrency: string;
    quoteCurrency: string;
    baseIconUrl?: string;
    quoteIconUrl?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const CurrencyPairBadge: React.FC<CurrencyPairBadgeProps> = ({
    baseCurrency,
    quoteCurrency,
    baseIconUrl,
    quoteIconUrl,
    size = 'md',
    className
}) => {
    const sizeConfig = {
        sm: {
            container: 'text-xs',
            icons: 'h-4 w-4',
            iconOffset: '-ml-1'
        },
        md: {
            container: 'text-sm',
            icons: 'h-5 w-5',
            iconOffset: '-ml-1.5'
        },
        lg: {
            container: 'text-base',
            icons: 'h-6 w-6',
            iconOffset: '-ml-2'
        }
    };

    const { container, icons, iconOffset } = sizeConfig[size];

    return (
        <div className={cn("flex items-center gap-2", container, className)}>
            <div className="flex">
                {baseIconUrl ? (
                    <img
                        src={baseIconUrl}
                        alt={baseCurrency}
                        className={cn("rounded-full border border-primary-bg", icons)}
                    />
                ) : (
                    <div className={cn("rounded-full bg-accent flex items-center justify-center text-white font-bold", icons)}>
                        {baseCurrency.charAt(0)}
                    </div>
                )}

                {quoteIconUrl ? (
                    <img
                        src={quoteIconUrl}
                        alt={quoteCurrency}
                        className={cn("rounded-full border border-primary-bg", icons, iconOffset)}
                    />
                ) : (
                    <div className={cn("rounded-full bg-accent-pink flex items-center justify-center text-white font-bold", icons, iconOffset)}>
                        {quoteCurrency.charAt(0)}
                    </div>
                )}
            </div>

            <div className="font-medium text-text-primary">
                {baseCurrency}/{quoteCurrency}
            </div>
        </div>
    );
};