import {cn} from "../../lib/utils/cn.ts";

interface TableHeaderProps {
    children: React.ReactNode;
    className?: string;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    sorted?: 'asc' | 'desc' | null;
    onSort?: () => void;
}

export const TableOrderHeader: React.FC<TableHeaderProps> = ({
    children,
    className,
    align = 'left',
    sortable = false,
    sorted = null,
    onSort
}) => {
    const alignClass = {
        'left': 'text-left',
        'center': 'text-center',
        'right': 'text-right'
    };

    return (
        <div
            className={cn(
                'py-2 px-3 text-xs font-medium text-text-secondary',
                alignClass[align],
                sortable ? 'cursor-pointer hover:text-text-primary' : '',
                className
            )}
            onClick={sortable ? onSort : undefined}
        >
            <div className="flex items-center">
                {children}
                {sortable && (
                    <div className="flex flex-col ml-1">
                        <span className={cn('text-[0.5rem]', sorted === 'asc' ? 'text-accent' : '')}>▲</span>
                        <span className={cn('text-[0.5rem]', sorted === 'desc' ? 'text-accent' : '')}>▼</span>
                    </div>
                )}
            </div>
        </div>
    );
};