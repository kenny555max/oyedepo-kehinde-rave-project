import type {MarketType, PairTickerDropDownProps} from "../../types.ts";
import {useEffect, useState} from "react";
import {SAMPLE_MARKETS} from "../../data.ts";
import {SearchComp} from "../atoms/Search.tsx";
import {SearchResult} from "../atoms/SearchResult.tsx";

export default function PairTickerDropDown({ selectedMarket, dropdownRef, setSelectedMarket, setIsDropdownOpen }: PairTickerDropDownProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMarkets, setFilteredMarkets] = useState(SAMPLE_MARKETS);
    const [activeFilter, setActiveFilter] = useState('All');

    // Filter markets based on search query and active filter
    useEffect(() => {
        let filtered = SAMPLE_MARKETS;

        if (searchQuery) {
            filtered = filtered.filter(market =>
                market.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
                market.baseAsset.toLowerCase().includes(searchQuery.toLowerCase()) ||
                market.quoteAsset.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (activeFilter !== 'All') {
            filtered = filtered.filter(market => {
                if (activeFilter === 'BTC') return market.baseAsset === 'BTC' || market.quoteAsset === 'BTC';
                if (activeFilter === 'USD') return market.quoteAsset === 'USDT';
                return true;
            });
        }

        setFilteredMarkets(filtered);
    }, [searchQuery, activeFilter]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // sample interface for the sample data. this will be replaced with the actual data prop
    const handleMarketSelect = (market: MarketType) => {
        setSelectedMarket({
            ...selectedMarket,
            symbol: market.symbol,
            baseAsset: market.baseAsset,
            quoteAsset: market.quoteAsset,
            price: market.price,
            change: market.change,
            changePercent: market.changePercent.startsWith('-') ? market.changePercent : `+${market.changePercent}`,
        });
        setIsDropdownOpen(false);
    };

    return(
        <div className="p-2">
            <SearchComp searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            <div className="flex mt-2 border-b border-primary-border">
                {['All', 'USD', 'BTC'].map((filter) => (
                    <button
                        key={filter}
                        className={`line-height-16px p-2 text-sm ${activeFilter === filter ? 'bg-type-select-bg rounded-full' : 'text-text-secondary'}`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="mt-2 max-h-60 scrollable-element overflow-y-auto">
                {filteredMarkets.length > 0 ? (
                    filteredMarkets.map((market) => (
                        <SearchResult handleMarketSelect={handleMarketSelect} market={market} />
                    ))
                ) : (
                    <div className="text-center py-4 text-text-secondary">No results found</div>
                )}
            </div>
        </div>
    );
}