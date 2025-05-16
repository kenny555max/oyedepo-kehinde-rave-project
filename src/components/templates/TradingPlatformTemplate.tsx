import React from 'react';
import {ChartPanel} from "../organisms/ChartPanel.tsx";
import {TradingPanel} from "../organisms/TradingPanel.tsx";
import TradingInterface from "../organisms/TradingInterface.tsx";

interface TradingPlatformTemplateProps {
    className?: string;
}

export const TradingPlatformTemplate: React.FC<TradingPlatformTemplateProps> = ({
    className = ''
}) => {
    return (
        <div className={`w-full bg-primary-bg text-text-primary ${className}`}>
            {/* Responsive container with the main layout */}
            <div className="flex flex-col xl:flex-row w-full gap-4">
                {/* Left section - Large trading chart */}
                <ChartPanel className="w-full xl:w-3/4" />

                {/* Right section - Trading interface */}
                <div className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
                    {/* Top card - Order Book */}
                    <TradingInterface />

                    {/* Bottom card - Buy/Sell Interface */}
                    <TradingPanel />
                </div>
            </div>
        </div>
    );
};