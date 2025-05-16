import React from 'react';
import {Card} from "../atoms/CardAtoms/Card.tsx";
import {OrderForm} from "./OrderForm.tsx";
import type {OrderFormData} from "../../types.ts";

interface TradingPanelProps {
    className?: string;
}

export const TradingPanel: React.FC<TradingPanelProps> = ({ className = '' }) => {
    const handleOrderSubmit = (data: OrderFormData) => {
        console.log('Order submitted:', data);
        // Process order submission
    };

    return (
    <Card className={`min-h-[300px] ${className}`}>
            <OrderForm onSubmit={handleOrderSubmit} />
        </Card>
    );
};