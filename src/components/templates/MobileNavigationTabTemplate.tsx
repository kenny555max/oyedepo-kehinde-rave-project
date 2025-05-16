import {useState} from "react";
import * as Tabs from "@radix-ui/react-tabs";
import {TabSwitcher} from "../molecules/TradingInterfaceModules/TabSwitcher.tsx";
import {OrderBookView} from "../molecules/TradingInterfaceModules/OrderBookView.tsx";
import {RecentTradesView} from "../molecules/TradingInterfaceModules/RecentTradeViews.tsx";
import {generateSampleData} from "../../data.ts";
import {ChartPanel} from "../organisms/ChartPanel.tsx";
import {TradingPanel} from "../organisms/TradingPanel.tsx";
import {Button} from "../atoms/ButtonAtoms/Button.tsx";
import {cn} from "../../lib/utils/cn.ts";

export default function MobileNavigationTabTemplate() {
    const [activeTab, setActiveTab] = useState<string>('orderBook');
    const { sellOrders, buyOrders, recentTrades, currentPrice } = generateSampleData();
    const [showBottomMenu, setShowBottomMenu] = useState<boolean>(false);

    const tabs = [
        { id: 'charts', label: 'Charts' },
        { id: 'orderBook', label: 'Order Book' },
        { id: 'recentTrades', label: 'Recent Trades' }
    ];

    return(
        <div className="mobile-nav-tab-template sm:hidden block p-2 bg-primary-border text-text-primary border border-primary-border rounded">
            <Tabs.Root defaultValue="charts" onValueChange={setActiveTab}>
                <TabSwitcher className={"grid-cols-3"} tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

                <Tabs.Content value="charts" className="focus:outline-none">
                    <ChartPanel />
                </Tabs.Content>

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

            {showBottomMenu ? (
                <TradingPanel onClick={() => setShowBottomMenu(false)}
                    className={
                        cn(
                            "fixed z-10 bottom-0 w-full left-0 rounded-t-[20px] px-8 py-[20px] shadow-lg transform transition-all duration-300 opacity-0",
                            showBottomMenu ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                        )
                    }
                />
            ) : (
                <Button onClick={() => setShowBottomMenu(true)} className={"fixed bottom-4 right-4 rounded-full"}>M</Button>
            )}
        </div>
    );
}