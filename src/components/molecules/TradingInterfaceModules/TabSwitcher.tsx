import React from "react";
import type {TabSwitcherProps} from "../../../types.ts";
import * as Tabs from "@radix-ui/react-tabs";
import {TabButton} from "../../atoms/TradingInterfaceAtoms/TableButton.tsx";
import {cn} from "../../../lib/utils/cn.ts";

export const TabSwitcher: React.FC<TabSwitcherProps> = ({ activeTab, onTabChange, tabs, className }) => (
    <Tabs.List className={cn("grid grid-cols-2 bg-primary-bg p-1 rounded-[8px] mb-1", className)}>
        {tabs.map((tab: { id: string; label: string }) => (
            <TabButton
                key={tab.id}
                value={tab.id}
                active={activeTab === tab.id}
                onClick={() => onTabChange(tab.id)}
            >
                {tab.label}
            </TabButton>
        ))}
    </Tabs.List>
);
