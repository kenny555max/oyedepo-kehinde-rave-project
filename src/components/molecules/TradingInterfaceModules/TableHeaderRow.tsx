import React from "react";
import {TableHeader} from "../../atoms/TradingInterfaceAtoms/TableHeader.tsx";
import {cn} from "../../../lib/utils/cn.ts";

const Title = ({ text, className }: { className?: string; text: string }) => {
    return(
        <span className={cn("opacity-60 font-[500] text-muted-color text-[12px] md:text-[9px] leading-[16px]", className)}>{text}</span>
    )
}

export const TableHeaderRow: React.FC = () => (
    <div className="flex mb-1 px-1 justify-evenly">
        <TableHeader className="flex items-end flex-col">
            <Title text={'Price'} />
            <Title text={'(USDT)'} />
        </TableHeader>
        <TableHeader className="flex items-end flex-col">
            <Title text={'Amount'} />
            <Title text={'(BTC)'} />
        </TableHeader>
        <TableHeader className="flex items-end flex-col">
            <Title text={'Total'} className='!text-[12px]' />
        </TableHeader>
    </div>
);