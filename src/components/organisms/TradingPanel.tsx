import React from 'react';
import {Card} from "../atoms/CardAtoms/Card.tsx";
import {OrderForm} from "./OrderForm.tsx";
import type {OrderFormData} from "../../types.ts";
import {X} from "lucide-react";

interface TradingPanelProps {
    className?: string;
    onClick?: () => void;
}

export const TradingPanel: React.FC<TradingPanelProps> = ({ onClick, className = '' }) => {
    const handleOrderSubmit = (data: OrderFormData) => {
        console.log('Order submitted:', data);
        // Process order submission
    };

    return (
    <Card className={`min-h-[300px] pb-4 pt-6 bg-primary-border  ${className}`}>
            <button onClick={onClick} className="absolute right-4 top-0">
                <X className={"w-6 h-6"} />
            </button>
            <OrderForm onSubmit={handleOrderSubmit} />
        </Card>
    );
};