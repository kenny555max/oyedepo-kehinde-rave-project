import {CryptoIcon} from "./CryptoIcon.tsx";
import type {SearchResultProps} from "../../types.ts";

export const SearchResult = ({ market, handleMarketSelect }: SearchResultProps) => {
    return(
        <button
            key={market.symbol}
            className="flex items-center justify-between w-full px-2 py-3 hover:bg-hover-bg rounded-md"
            onClick={() => handleMarketSelect(market)}
        >
            <div className="flex items-center space-x-2">
                <div className="flex items-center -space-x-1">
                    <CryptoIcon symbol={market.baseAsset} size="sm" />
                    <CryptoIcon symbol={market.quoteAsset} size="sm" />
                </div>
                <span className="text-text-primary">{market.baseAsset}/{market.quoteAsset}</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-text-primary">${market.price}</span>
                <span className={market.changePercent.startsWith('-') ? 'text-negative' : 'text-positive'}>
                  {market.changePercent.startsWith('-') ? '' : '+'}{market.changePercent}%
                </span>
            </div>
        </button>
    );
}