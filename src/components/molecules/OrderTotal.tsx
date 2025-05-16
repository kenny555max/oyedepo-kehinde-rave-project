import React from 'react';
import {LabeledValue} from "../atoms/FormAtoms/LabeledValue.tsx";

interface OrderTotalProps {
    amount: string;
    price: string;
    currency?: string;
}

export const OrderTotal: React.FC<OrderTotalProps> = ({ amount, price, currency = 'USD' }) => {
    const calculateTotal = () => {
        const amountNum = parseFloat(amount) || 0;
        const priceNum = parseFloat(price) || 0;
        return (amountNum * priceNum).toFixed(2);
    };

    return (
        <LabeledValue
            label="Total"
            value={`${calculateTotal()} ${currency}`}
            className="mb-4"
        />
    );
};