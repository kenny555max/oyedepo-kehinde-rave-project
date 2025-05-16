import React from 'react';
import {ChartPanel} from "../organisms/ChartPanel.tsx";
import {TradingPanel} from "../organisms/TradingPanel.tsx";

interface TradingPlatformTemplateProps {
    className?: string;
}

export const TradingPlatformTemplate: React.FC<TradingPlatformTemplateProps> = ({
    className = ''
}) => {
    return (
        <div className={`w-full sm:block hidden bg-primary-bg text-text-primary ${className}`}>
            {/* Responsive container with the main layout */}
            <div className="flex flex-col xl:flex-row w-full gap-4">
                {/* Left section - Large trading chart */}
                <ChartPanel className="w-full xl:w-[80%]" />

                {/* Right section - Trading interface */}
                <div className="w-full xl:w-[20%] gap-4 md:gap-2">
                    {/* Bottom card - Buy/Sell Interface */}
                    <TradingPanel />
                </div>
            </div>
        </div>
    );
};