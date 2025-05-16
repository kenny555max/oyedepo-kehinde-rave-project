import React, {useState} from 'react';
import { Input } from '../atoms/FormAtoms/Input';
import { OrderTypeHelp } from '../atoms/OrderTypeHelp';

interface PriceInputProps {
    value: string;
    onChange: (value: string) => void;
    currency?: string;
    disabled?: boolean;
    label: string;
}

export const PriceInput: React.FC<PriceInputProps> = ({
  value,
  onChange,
  currency = 'USD',
  disabled = false,
    label
}) => {
    const [showLabel, setShowLabel] = useState(true);

    return (
        <div className="mb-4 relative">
            {showLabel && (
                <div className="flex items-center absolute z-10 left-2 bottom-1 justify-between mb-1">
                    <div className="flex items-center">
                        <span className="text-sm text-text-secondary mr-1">{label}</span>
                        <OrderTypeHelp
                            title={label}
                            content="The price at which your order will be executed"
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
                // placeholder="Limit"
                disabled={disabled}
                type="number"
                min="0"
                step="0.01"
            />
        </div>
    );
};