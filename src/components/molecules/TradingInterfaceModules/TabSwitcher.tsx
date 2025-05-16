import React from "react";
import type {TabSwitcherProps} from "../../../types.ts";
import * as Tabs from "@radix-ui/react-tabs";
import {TabButton} from "../../atoms/TradingInterfaceAtoms/TableButton.tsx";

export const TabSwitcher: React.FC<TabSwitcherProps> = ({ activeTab, onTabChange, tabs }) => (
    <Tabs.List className="grid grid-cols-2 border-b border-primary-border mb-1">
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
