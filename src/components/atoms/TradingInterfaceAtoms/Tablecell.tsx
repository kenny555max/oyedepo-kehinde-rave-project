import React from 'react';
import {cn} from "../../../lib/utils/cn.ts";

interface TableCellProps {
    children: React.ReactNode;
    className?: string;
    align?: 'left' | 'center' | 'right';
    highlight?: boolean;
}

export const TableCell: React.FC<TableCellProps> = ({
    children,
    className,
    align = 'left',
    highlight = false
}) => {
    const alignClass = {
        'left': 'text-left',
        'center': 'text-center',
        'right': 'text-right'
    };

    return (
        <div
            className={cn(
                'py-2 text-body-xs',
                alignClass[align],
                highlight ? '!text-negative' : '!text-text-primary',
                className
            )}
        >
            {children}
        </div>
    );
};