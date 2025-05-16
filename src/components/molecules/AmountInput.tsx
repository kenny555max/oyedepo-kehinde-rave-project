import React, {useState} from 'react';
import { Input } from '../atoms/FormAtoms/Input';
import { OrderTypeHelp } from '../atoms/OrderTypeHelp';

interface AmountInputProps {
    value: string;
    onChange: (value: string) => void;
    currency?: string;
}

export const AmountInput: React.FC<AmountInputProps> = ({
    value,
    onChange,
    currency = 'USD',
}) => {
    const [showLabel, setShowLabel] = useState(true);

    return (
        <div className="mb-4 relative">
            {showLabel && (
                <div className="flex items-center absolute z-10 left-2 bottom-1 justify-between mb-1">
                    <div className="flex items-center">
                        <span className="text-sm text-text-secondary mr-1">Amount</span>
                        <OrderTypeHelp
                            title="Amount"
                            content="The amount you want to buy or sell"
                        />
                    </div>
                </div>
            )}
            <Input
                value={value}
                onFocus={() => setShowLabel(false)}
                onBlur={() => setShowLabel(true)}
                onChange={(e) => onChange(e.target.value)}
                suffix={currency}
                type="number"
                min="0"
                step="0.01"
            />
        </div>
    );
};