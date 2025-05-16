import {useState} from "react";
import * as Tabs from "@radix-ui/react-tabs";
import {TabSwitcher} from "../molecules/TradingInterfaceModules/TabSwitcher.tsx";

export default function ChartOrder() {
    const [activeTab, setActiveTab] = useState<string>('orderBook');

    const tabs = [
        { id: 'open', label: 'Open Orders' },
        { id: 'positions', label: 'Positions' },
        { id: 'order', label: 'Order History' },
        { id: 'trade', label: 'Trade History' }
    ];

    return(
        <div className="mobile-nav-tab-template min-h-[561px] py-4 bg-primary-border text-text-primary border border-primary-border rounded">
            <Tabs.Root defaultValue="charts" onValueChange={setActiveTab}>
                <div className="w-full md:w-[60%] mx-auto">
                    <TabSwitcher className={"grid-cols-2 gap-2 sm:gap-0 sm:grid-cols-4"} tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
                </div>

                <Tabs.Content value="open" className="focus:outline-none">
                    <div className={"h-full flex text-center flex-col justify-center items-center"}>
                        <div className={"text-body-xl"}>No Pen Orders</div>
                        <div className={"text-body-sm"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar nullam sit imperdiet pulvinar.
                        </div>
                    </div>
                </Tabs.Content>

                <Tabs.Content value="positions" className="focus:outline-none">
                    ffffff
                </Tabs.Content>

                <Tabs.Content value="order" className="focus:outline-none">
                    fffffffffff
                </Tabs.Content>

                <Tabs.Content value="trade" className="focus:outline-none">
                    fffffffffff
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
}