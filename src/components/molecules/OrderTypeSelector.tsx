import React from 'react';
import type { OrderTypeTab } from '../../types';
import {Button} from "../atoms/ButtonAtoms/Button.tsx";

interface OrderTypeSelectorProps {
    activeType: OrderTypeTab;
    onChange: (type: OrderTypeTab) => void;
}

export const OrderTypeSelector: React.FC<OrderTypeSelectorProps> = ({ activeType, onChange }) => {
    const orderTypes: { id: OrderTypeTab; label: string }[] = [
        { id: 'limit', label: 'Limit' },
        { id: 'market', label: 'Market' },
        { id: 'stop-limit', label: 'Stop-Limit' },
    ];

    return (
        <div className="flex justify-evenly mb-4">
            {orderTypes.map((type) => {
                return (
                    <Button
                        key={type.id}
                        id={type.id}
                        // label={type.label}
                        className={`hover:!bg-type-select-bg h-[28px] rounded-[40px] line-height-16px ${activeType === type.id ? '!bg-type-select-bg' : '!bg-transparent'}`}
                        active={activeType === type.id}
                        onClick={() => onChange(type.id as OrderTypeTab)}
                    >
                        {type.label}
                    </Button>
                )
            })}
        </div>
    );
};
