import React from "react";
import type {TabButtonProps} from "../../../types.ts";
import * as Tabs from "@radix-ui/react-tabs";

export const TabButton: React.FC<TabButtonProps> = ({ value, active, children, onClick }) => (
    <Tabs.Trigger
        value={value}
        className={`px-4 text-sm font-medium transition-colors focus:outline-none ${
            active ? 'active-tab-button' : 'text-text-secondary hover:text-muted-color'
        }`}
        onClick={onClick}
    >
        {children}
    </Tabs.Trigger>
);
