import React from "react";
import type {RecentTradesViewProps} from "../../../types.ts";
import {TableHeaderRow} from "./TableHeaderRow.tsx";
import {OrderRow} from "./OrderRow.tsx";

export const RecentTradesView: React.FC<RecentTradesViewProps> = ({ trades }) => {
    return (
        <div>
            <TableHeaderRow />
            <div className="max-h-96 overflow-y-auto">
                {trades.map((trade, idx) => (
                    <OrderRow
                        key={`trade-${idx}`}
                        price={trade.price}
                        amount={trade.amount}
                        total={trade.total}
                        type={trade.type}
                    />
                ))}
            </div>
        </div>
    );
};