import React, { useState } from 'react';
import {Card} from "../atoms/CardAtoms/Card.tsx";
import {ChartHeader} from "../molecules/ChartHeader.tsx";
import TradingChart from "./TradingChart.tsx";

interface ChartPanelProps {
    className?: string;
}

export const ChartPanel: React.FC<ChartPanelProps> = ({ className = '' }) => {
    const [activeTime, setActiveTime] = useState<string>('1D');

    return (
        <Card className={className}>
            <div className="h-full flex bg-primary-border flex-col">
                <ChartHeader
                    activeTime={activeTime}
                    onTimeChange={setActiveTime}
                />
                <div className="flex-grow bg-red-500 flex items-center justify-center">
                    <TradingChart />
                </div>
            </div>
        </Card>
    );
};