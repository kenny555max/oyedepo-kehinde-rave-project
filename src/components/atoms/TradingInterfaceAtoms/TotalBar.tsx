import React from "react";
import type {TotalBarProps} from "../../../types.ts";

export const TotalBar: React.FC<TotalBarProps> = ({ percentage = 0, type = 'buy' }) => {
    const bgColor = type === 'buy' ? 'bg-positive/20' : 'bg-negative/20';
    const direction = type === 'sell' ? 'left' : 'right';

    return (
        <div className="absolute inset-0 z-0">
            <div
                className={`h-full ${bgColor}`}
                style={{
                    width: `${percentage}%`,
                    float: direction,
                }}
            />
        </div>
    );
};
