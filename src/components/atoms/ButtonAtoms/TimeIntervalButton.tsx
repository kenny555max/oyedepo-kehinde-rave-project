import {cn} from "../../../lib/utils/cn.ts";

interface TimeIntervalButtonProps {
    interval: string;
    active?: boolean;
    onClick?: () => void;
    className?: string;
}

export const TimeIntervalButton: React.FC<TimeIntervalButtonProps> = ({
  interval,
  active = false,
  onClick,
  className
}) => {
return (
        <button
            onClick={onClick}
            className={cn(
                'px-3 py-1 text-sm rounded',
                active ? 'bg-active-bg text-text-primary' : 'text-text-secondary hover:bg-hover-bg',
                className
            )}
        >
            {interval}
        </button>
    );
};