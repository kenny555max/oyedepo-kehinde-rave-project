import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import type {Order, TradingData, OrderType} from "../../types.ts";
import {TabSwitcher} from "../molecules/TradingInterfaceModules/TabSwitcher.tsx";
import {OrderBookView} from "../molecules/TradingInterfaceModules/OrderBookView.tsx";
import {RecentTradesView} from "../molecules/TradingInterfaceModules/RecentTradeViews.tsx";

// Sample Data
const generateSampleData = (): TradingData => {
    const basePrice = 36920.12;
    const variation = 100;

    // Generate sell orders (higher than base price)
    const sellOrders: Order[] = Array(5).fill(0).map((_, idx) => {
        const price = basePrice + (idx + 1) * (Math.random() * 10 + 5);
        const amount = 0.758965;
        return {
            price,
            amount,
            total: price * amount,
            type: 'sell'
        };
    }).reverse();

    // Generate buy orders (lower than base price)
    const buyOrders: Order[] = Array(5).fill(0).map((_, idx) => {
        const price = basePrice - (idx + 1) * (Math.random() * 10 + 5);
        const amount = 0.758965;
        return {
            price,
            amount,
            total: price * amount,
            type: 'buy'
        };
    });

    // Generate recent trades
    const recentTrades: Order[] = Array(10).fill(0).map(() => {
        const price = basePrice + (Math.random() * variation * 2 - variation);
        const amount = 0.758965;
        const type: OrderType = Math.random() > 0.5 ? 'buy' : 'sell';
        return {
            price,
            amount,
            total: price * amount,
            type
        };
    });

    return {
        sellOrders,
        buyOrders,
        recentTrades,
        currentPrice: {
            price: basePrice,
            change: 123.45
        }
    };
};

const TradingInterface: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('orderBook');
    const { sellOrders, buyOrders, recentTrades, currentPrice } = generateSampleData();

    const tabs = [
        { id: 'orderBook', label: 'Order Book' },
        { id: 'recentTrades', label: 'Recent Trades' }
    ];

    return (
        <div className="trading-interface bg-primary-border text-text-primary border border-primary-border rounded p-2">
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