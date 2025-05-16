import React from 'react';
import {cn} from "../../lib/utils/cn.ts";

type SeparatorOrientation = 'horizontal' | 'vertical';

interface SeparatorProps {
    orientation?: SeparatorOrientation;
    className?: string;
    dashed?: boolean;
}

export const Separator: React.FC<SeparatorProps> = ({
    orientation = 'horizontal',
    className,
    dashed = false
}) => {
    return (
        <div
            className={cn(
                'bg-primary-border',
                dashed ? 'border-dashed' : '',
                orientation === 'horizontal'
                    ? 'h-px w-full'
                    : 'w-px h-[40px]',
                className
            )}
        />
    );
};