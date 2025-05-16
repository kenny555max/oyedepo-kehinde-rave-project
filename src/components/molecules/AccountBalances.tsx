import React from 'react';

interface AccountBalancesProps {
    openOrdersValue: string;
    availableValue: string;
}

export const AccountBalances: React.FC<AccountBalancesProps> = ({
                                                                    openOrdersValue,
                                                                    availableValue,
                                                                }) => {
    return (
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
                <div className="text-sm text-text-secondary">Open Orders</div>
                <div className="text-text-primary">{openOrdersValue}</div>
            </div>
            <div>
                <div className="text-sm text-text-secondary">Available</div>
                <div className="text-text-primary">{availableValue}</div>
            </div>
        </div>
    );
};