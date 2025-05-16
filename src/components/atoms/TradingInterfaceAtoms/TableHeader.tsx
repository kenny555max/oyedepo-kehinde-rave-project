import React from "react";
import type {TableHeaderProps} from "../../../types.ts";

export const TableHeader: React.FC<TableHeaderProps> = ({ children, className = '' }) => (
    <div className={`text-xs text-text-secondary font-medium py-2 ${className}`}>
        {children}
    </div>
);