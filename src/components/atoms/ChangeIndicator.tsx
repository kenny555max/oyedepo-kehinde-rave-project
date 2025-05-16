import type {ChangeIndicatorProps} from "../../types.ts";

export const ChangeIndicator: React.FC<ChangeIndicatorProps> = ({ value, percentage }) => {
    const isPositive = parseFloat(percentage) > 0;
    const color = isPositive ? "text-positive" : "text-negative";

    return (
        <div className={`flex items-center ${color}`}>
            <span className={"lg:text-[16px] text-[16px] md:text-[14px]"}>${value} {percentage}%</span>
        </div>
    );
};