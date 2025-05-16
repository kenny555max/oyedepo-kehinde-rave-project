import React from "react";
import type {TableRowProps} from "../../../types.ts";

export const TableRow: React.FC<TableRowProps> = ({ children, highlighted = false, type = 'default' }) => {
    const getBgColor = (): string => {
        if (highlighted) return 'bg-active-bg';
        if (type === 'buy') return 'hover:bg-hover-bg';
        if (type === 'sell') return 'hover:bg-hover-bg';
        return 'hover:bg-hover-bg';
    };

    return (
        <div className={`flex w-full cursor-pointer py-1 ${getBgColor()}`}>
            {children}
        </div>
    );
};
