import React from 'react';
import type { OrderSide } from '../../types';
import {Button} from "../atoms/ButtonAtoms/Button.tsx";

interface TradeSideSelectorProps {
    activeSide: OrderSide;
    onChange: (side: OrderSide) => void;
}

export const TradeSideSelector: React.FC<TradeSideSelectorProps> = ({ activeSide, onChange }) => {
    return (
        <div className="flex space-x-4 mb-4">
            <Button
                className={`flex-1 py-2 rounded text-center transition ${
                    activeSide === 'buy'
                        ? 'border border-positive text-positive'
                        : 'text-text-secondary hover:text-text-primary'
                }`}
                onClick={() => onChange('buy')}
            >
                Buy
            </Button>
            <Button
                className={`flex-1 py-2 rounded text-center transition ${
                    activeSide === 'sell'
                        ? 'border border-negative text-negative'
                        : 'text-text-secondary hover:text-text-primary'
                }`}
                onClick={() => onChange('sell')}
            >
                Sell
            </Button>
        </div>
    );
};