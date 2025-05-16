import type {PriceProps} from "../../types.ts";

export const Price: React.FC<PriceProps> = ({ value }) => {
    return <span className="text-positive font-[500] text-[18px] leading-[24px]">${value}</span>;
};