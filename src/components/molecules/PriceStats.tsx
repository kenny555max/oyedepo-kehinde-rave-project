import React from 'react';

type CurrencyPairProps = {
    baseCurrency: string;
    quoteCurrency: string;
    price: string;
    priceChange: string;
    percentChange: string;
    isPositive: boolean;
};

const CurrencyPair: React.FC<CurrencyPairProps> = ({
                                                       baseCurrency,
                                                       quoteCurrency,
                                                       price,
                                                       priceChange,
                                                       percentChange,
                                                       isPositive
                                                   }) => {
    return (
        <div className="flex items-center">
            <div className="flex items-center mr-2">
                <div className="w-6 h-6 mr-1 relative">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center text-xs">₿</div>
                    <div className="absolute right-0 bottom-0 w-4 h-4 rounded-full bg-green-400 flex items-center justify-center text-xs">$</div>
                </div>
                <div className="font-bold text-text-primary">{baseCurrency}/{quoteCurrency}</div>
                <div className="ml-3 dropdown-arrow">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#848E9C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="ml-4 text-text-primary font-medium">{price}</div>
            <div className={`ml-2 text-sm ${isPositive ? 'text-positive' : 'text-negative'}`}>
                {priceChange} {percentChange}
            </div>
        </div>
    );
};

export default CurrencyPair;