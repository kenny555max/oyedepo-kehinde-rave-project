import {ChangeIndicator} from "../atoms/ChangeIndicator.tsx";
import {StatItem} from "../atoms/StatItem.tsx";
import type {StatsSectionProps} from "../../types.ts";

export default function StatsSection({ selectedMarket }: StatsSectionProps) {
    return(
        <div className="flex flex-col md:flex-row w-full md:w-auto overflow-x-auto no-scrollbar">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-0 gap-4 md:gap-8 md:ml-4 pb-4 md:pb-0 w-full md:w-auto">
                <div className="pl-0 lg:pl-4 pr-4 lg:pr-12 flex-shrink-0 mb-2 lg:mb-0 lg:border-l lg:border-l-muted-color">
                    <div className="flex items-center text-xs text-text-secondary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.99992 13.3333C10.9454 13.3333 13.3333 10.9454 13.3333 7.99992C13.3333 5.0544 10.9454 2.66659 7.99992 2.66659C5.0544 2.66659 2.66659 5.0544 2.66659 7.99992C2.66659 10.9454 5.0544 13.3333 7.99992 13.3333ZM7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6818 1.33325 7.99992 1.33325C4.31802 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666Z" fill="#A7B1BC"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.99992 4C8.36811 4 8.66659 4.29848 8.66659 4.66667V7.72386L10.138 9.19526C10.3983 9.45561 10.3983 9.87772 10.138 10.1381C9.87764 10.3984 9.45553 10.3984 9.19518 10.1381L7.52851 8.4714C7.40349 8.34638 7.33325 8.17681 7.33325 8V4.66667C7.33325 4.29848 7.63173 4 7.99992 4Z" fill="#A7B1BC"/>
                        </svg>
                        <span className="ml-1">24h change</span>
                    </div>
                    <ChangeIndicator
                        value={selectedMarket.change}
                        percentage={selectedMarket.changePercent}
                    />
                </div>

                <StatItem
                    label="24h high"
                    value={`${selectedMarket.high.value} ${selectedMarket.high.percentage}%`}
                    isPositive={selectedMarket.high.percentage.startsWith('+')}
                />

                <StatItem
                    label="24h low"
                    value={`${selectedMarket.low.value} ${selectedMarket.low.percentage}%`}
                    isPositive={selectedMarket.low.percentage.startsWith('+')}
                />

                <StatItem
                    label="24h volume"
                    value={selectedMarket.volume}
                    isPositive={null}
                />
            </div>
        </div>
    );
}