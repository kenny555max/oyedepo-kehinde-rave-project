import React from "react";
import type {OrderBookViewProps} from "../../../types.ts";
import {TableHeaderRow} from "./TableHeaderRow.tsx";
import {OrderRow} from "./OrderRow.tsx";
import {CurrentPrice} from "./CurrentPrice.tsx";
import {IconButton} from "../../atoms/ButtonAtoms/IconButton.tsx";

export const OrderBookView: React.FC<OrderBookViewProps> = ({ sellOrders, buyOrders, currentPrice }) => {
    const maxTotal = Math.max(
        ...sellOrders.map(o => o.total),
        ...buyOrders.map(o => o.total)
    );

    return (
        <div className="mt-2 mb-4">
            <div className={"flex items-center justify-between"}>
                <div className="flex gap-x-1">
                    <IconButton
                        icon={
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="12" height="2" rx="1" fill="#FF6838"/>
                                <rect y="4" width="12" height="2" rx="1" fill="#B1B5C4"/>
                                <rect y="8" width="12" height="2" rx="1" fill="#25C26E"/>
                            </svg>
                        }
                        onClick={() => console.log('called')}
                        variant="default"
                    />
                    <IconButton
                        icon={
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="12" height="2" rx="1" fill="#B1B5C4"/>
                                <rect y="4" width="12" height="2" rx="1" fill="#B1B5C4"/>
                                <rect y="8" width="12" height="2" rx="1" fill="#25C26E"/>
                            </svg>
                        }
                        onClick={() => console.log('called')}
                        variant="default"
                    />
                    <IconButton
                        icon={
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="12" height="2" rx="1" fill="#FF6838"/>
                                <rect y="4" width="12" height="2" rx="1" fill="#B1B5C4"/>
                                <rect y="8" width="12" height="2" rx="1" fill="#B1B5C4"/>
                            </svg>
                        }
                        onClick={() => console.log('called')}
                        variant="default"
                    />
                </div>
                <div>
                    <select className="bg-[#353945] cursor-pointer text-muted-color w-[63px] h-[32px] p-1 rounded-[3px]">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                    </select>
                </div>
            </div>
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