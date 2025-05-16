import React from 'react';

interface TradingTypeSelectorProps {
    activeType: 'buy' | 'sell';
    onTypeChange: (type: 'buy' | 'sell') => void;
}

export const TradingTypeSelector: React.FC<TradingTypeSelectorProps> = ({
    activeType,
    onTypeChange
}) => {
    return (
        <div className="flex">
            <button
                className={`flex-1 py-2 rounded-l-md ${
                    activeType === 'buy'
                        ? 'bg-positive text-white'
                        : 'bg-primary-bg text-text-primary border-l border-t border-b border-primary-border'
                }`}
                onClick={() => onTypeChange('buy')}
            >
                Buy
            </button>
            <button
                className={`flex-1 py-2 rounded-r-md ${
                    activeType === 'sell'
                        ? 'bg-negative text-white'
                        : 'bg-primary-bg text-text-primary border-r border-t border-b border-primary-border'
                }`}
                onClick={() => onTypeChange('sell')}
            >
                Sell
            </button>
        </div>
    );
};