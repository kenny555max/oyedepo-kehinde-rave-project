import {CryptoIcon} from "../atoms/CryptoIcon.tsx";
import CurrencyPair from "../atoms/CurrencyPair.tsx";
import {Price} from "../atoms/Price.tsx";
import type {PairTickerProps} from "../../types.ts";
import {useRef, useState} from "react";
import PairTickerDropDown from "../molecules/PairTickerDropDown.tsx";

export default function PairTicker({ selectedMarket, setSelectedMarket }: PairTickerProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    return(
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full md:w-auto mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
                <div className="flex items-center -space-x-1.5">
                    <CryptoIcon symbol={selectedMarket.baseAsset} />
                    {/*<CryptoIcon symbol={selectedMarket.quoteAsset} />*/}
                </div>

                <div className="relative">
                    <CurrencyPair
                        base={selectedMarket.baseAsset}
                        quote={selectedMarket.quoteAsset}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    />

                    {/* Dropdown */}
                    {isDropdownOpen && (
                        <div
                            ref={dropdownRef}
                            className="absolute top-full left-0 mt-2 w-64 bg-primary-bg border border-primary-border rounded-md shadow-lg z-10"
                        >
                            <PairTickerDropDown
                                selectedMarket={selectedMarket}
                                setSelectedMarket={setSelectedMarket}
                                setIsDropdownOpen={setIsDropdownOpen}
                                dropdownRef={dropdownRef}
                            />
                        </div>
                    )}
                </div>
            </div>

            <Price value={selectedMarket.price} />
        </div>
    );
}