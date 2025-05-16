import React from 'react';
import {Card} from "../atoms/CardAtoms/Card.tsx";
import TradingChart from "./TradingChart.tsx";
import ChartOrder from "./ChartOrder.tsx";
import TradingInterface from "./TradingInterface.tsx";

interface ChartPanelProps {
    className?: string;
}

export const ChartPanel: React.FC<ChartPanelProps> = ({ className = '' }) => {
    return (
        <Card className={className}>
            <div className="h-full flex flex-col">
                <div className="flex-grow flex-col sm:gap-2 gap-4 flex">
                    <div className={"flex md:flex-row flex-col gap-2"}>
                        <div className={"w-full rounded-[8px] md:w-[70%]"}>
                            <TradingChart />
                        </div>

                        {/* Top card - Order Book */}
                        <div className={"w-full md:w-[30%]"}>
                            <TradingInterface />
                        </div>
                    </div>

                    <ChartOrder />
                </div>
            </div>
        </Card>
    );
};