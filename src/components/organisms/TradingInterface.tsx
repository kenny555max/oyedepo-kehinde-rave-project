import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import {TabSwitcher} from "../molecules/TradingInterfaceModules/TabSwitcher.tsx";
import {OrderBookView} from "../molecules/TradingInterfaceModules/OrderBookView.tsx";
import {RecentTradesView} from "../molecules/TradingInterfaceModules/RecentTradeViews.tsx";
import {generateSampleData} from "../../data.ts";

const TradingInterface: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('orderBook');
    const { sellOrders, buyOrders, recentTrades, currentPrice } = generateSampleData();

    const tabs = [
        { id: 'orderBook', label: 'Order Book' },
        { id: 'recentTrades', label: 'Recent Trades' }
    ];

    return (
        <div className="trading-interface hidden sm:block bg-primary-border text-text-primary border border-primary-border rounded p-2">
            <Tabs.Root defaultValue="orderBook" onValueChange={setActiveTab}>
                <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

                <Tabs.Content value="orderBook" className="focus:outline-none">
                    <OrderBookView
                        sellOrders={sellOrders}
                        buyOrders={buyOrders}
                        currentPrice={currentPrice}
                    />
                </Tabs.Content>

                <Tabs.Content value="recentTrades" className="focus:outline-none">
                    <RecentTradesView trades={recentTrades} />
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
};

export default TradingInterface;