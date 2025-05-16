import React from "react";
import type {OrderRowProps} from "../../../types.ts";
import {TotalBar} from "../../atoms/TradingInterfaceAtoms/TotalBar.tsx";
import {TableRow} from "../../atoms/TradingInterfaceAtoms/TradingRow.tsx";
import {TableCell} from "../../atoms/TradingInterfaceAtoms/Tablecell.tsx";

export const OrderRow: React.FC<OrderRowProps> = ({ price, amount, total, type = 'buy', totalPercentage = 0 }) => {
    return (
        <TableRow type={type}>
            <div className="relative flex w-full">
                <TotalBar percentage={totalPercentage} type={type} />
                <div className="flex justify-evenly w-full z-10">
                    <TableCell highlight={!!price} type={type}>{price.toFixed(2)}</TableCell>
                    <TableCell>{amount.toFixed(6)}</TableCell>
                    <TableCell>{total.toFixed(2)}</TableCell>
                </div>
            </div>
        </TableRow>
    );
};