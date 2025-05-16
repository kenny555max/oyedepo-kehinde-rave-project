import React from 'react';
import type {CurrencyPairProps} from "../../types.ts";

const CurrencyPair: React.FC<CurrencyPairProps> = ({ base, quote, onClick }) => {
    return (
        <button onClick={onClick} className="flex gap-x-2 items-center">
            <span className="text-body-lg">{base}/{quote}</span>
            <span>
                <svg className="w-4 h-4 ml-1 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        </button>
    );
};

export default CurrencyPair;