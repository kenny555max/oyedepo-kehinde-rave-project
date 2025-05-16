import React, {useState} from 'react';
import type { TimeInForce } from '../../types';
import { OrderTypeHelp } from '../atoms/OrderTypeHelp';
import {Dropdown} from "../atoms/DropDown.tsx";

interface TimeInForceSelectorProps {
    value: TimeInForce;
    onChange: (value: TimeInForce) => void;
}

export const TimeInForceSelector: React.FC<TimeInForceSelectorProps> = ({ value, onChange }) => {
    const options = [
        { value: 'good_till_cancelled', label: 'Good till cancelled' },
        { value: 'immediate_or_cancel', label: 'Immediate or cancel' },
        { value: 'fill_or_kill', label: 'Fill or kill' },
    ];
    const [showLabel, setShowLabel] = useState(true);

    return (
        <div className="mb-4 relative">
            {showLabel && (
                <div className="flex items-center absolute z-10 left-2 bottom-1 justify-between mb-1">
                    <div className="flex items-center">
                        <span className="text-sm text-text-secondary mr-1">Type</span>
                        <OrderTypeHelp
                            title="Order Type"
                            content="Determines how long your order will remain active"
                        />
                    </div>
                </div>
            )}
            <Dropdown
                options={options}
                value={value}
                onFocus={() => setShowLabel(false)}
                onBlur={() => setShowLabel(true)}
                onChange={(newValue) => onChange(newValue as TimeInForce)}
            />
        </div>
    );
};