import React from 'react';
import {TimeSelector} from "./TimeInterval.tsx";
import {Button} from "../atoms/ButtonAtoms/Button.tsx";

interface ChartHeaderProps {
    activeTime: string;
    onTimeChange: (time: string) => void;
}

export const ChartHeader: React.FC<ChartHeaderProps> = ({
    activeTime,
    onTimeChange
}) => {
    return (
        <div className="flex items-center p-2 border-b border-primary-border">
            <TimeSelector activeTime={activeTime} onTimeChange={onTimeChange} />
            <div>
                <Button className={"text-muted-color"} variant="text" size="sm">
                    FX Indicators
                </Button>
            </div>
        </div>
    );
};