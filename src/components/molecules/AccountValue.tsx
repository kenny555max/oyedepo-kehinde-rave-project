import React, { useState } from 'react';

interface AccountValueProps {
    value: string;
    currency: string;
    availableCurrencies: string[];
    onCurrencyChange: (currency: string) => void;
}

export const AccountValue: React.FC<AccountValueProps> = ({
      value,
      currency,
      availableCurrencies,
      onCurrencyChange,
  }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="mb-3">
            <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Total account value</span>
                <div className="relative">
                    <button
                        type="button"
                        className="flex items-center text-text-primary"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        {currency} <span className="ml-1">▼</span>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-1 bg-primary-bg border border-secondary-border rounded shadow-lg z-10">
                            {availableCurrencies.map((curr) => (
                                <button
                                    key={curr}
                                    className={`w-full text-left px-3 py-2 hover:bg-hover-bg ${
                                        curr === currency ? 'bg-hover-bg text-text-primary' : 'text-text-secondary'
                                    }`}
                                    onClick={() => {
                                        onCurrencyChange(curr);
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    {curr}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="text-text-primary text-xl">{value}</div>
        </div>
    );
};
