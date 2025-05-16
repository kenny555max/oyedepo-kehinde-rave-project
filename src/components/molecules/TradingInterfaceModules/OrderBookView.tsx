import React from "react";
import type {OrderBookViewProps} from "../../../types.ts";
import {TableHeaderRow} from "./TableHeaderRow.tsx";
import {OrderRow} from "./OrderRow.tsx";
import {CurrentPrice} from "./CurrentPrice.tsx";

export const OrderBookView: React.FC<OrderBookViewProps> = ({ sellOrders, buyOrders, currentPrice }) => {
    const maxTotal = Math.max(
        ...sellOrders.map(o => o.total),
        ...buyOrders.map(o => o.total)
    );

    return (
        <div>
            <TableHeaderRow />
            <div className="max-h-60 overflow-y-auto">
                {sellOrders.map((order, idx) => (
                    <OrderRow
                        key={`sell-${idx}`}
                        price={order.price}
                        amount={order.amount}
                        total={order.total}
                        type="sell"
                        totalPercentage={(order.total / maxTotal) * 100}
                    />
                ))}
            </div>

            <CurrentPrice price={currentPrice.price} change={currentPrice.change} />

            <div className="max-h-60 overflow-y-auto">
                {buyOrders.map((order, idx) => (
                    <OrderRow
                        key={`buy-${idx}`}
                        price={order.price}
                        amount={order.amount}
                        total={order.total}
                        type="buy"
                        totalPercentage={(order.total / maxTotal) * 100}
                    />
                ))}
            </div>
        </div>
    );
};