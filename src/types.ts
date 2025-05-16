import React, {type RefObject} from "react";

export type OrderType = 'buy' | 'sell' | 'default';

export interface Order {
    price: number;
    amount: number;
    total: number;
    type: string;
}

export interface CurrentPriceInfo {
    price: number;
    change: number;
}

export interface TabButtonProps {
    value: string;
    active: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

export interface TableHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export interface TableRowProps {
    children: React.ReactNode;
    highlighted?: boolean;
    type?: OrderType;
}

export interface TableCellProps {
    children: React.ReactNode;
    className?: string;
    type?: OrderType;
}

export interface TotalBarProps {
    percentage: number;
    type: OrderType;
}

export interface TabSwitcherProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    tabs: {
        id: string;
        label: string;
    }[];
}

export interface OrderRowProps extends Order {
    totalPercentage?: number;
}

export interface CurrentPriceProps {
    price: number;
    change: number;
}

export interface OrderBookViewProps {
    sellOrders: Order[];
    buyOrders: Order[];
    currentPrice: CurrentPriceInfo;
}

export interface RecentTradesViewProps {
    trades: Order[];
}

export interface TradingData {
    sellOrders: Order[];
    buyOrders: Order[];
    recentTrades: Order[];
    currentPrice: CurrentPriceInfo;
}

export type OrderSide = 'buy' | 'sell';
export type OrderTypeTab = 'limit' | 'market' | 'stop-limit';
export type TimeInForce = 'good_till_cancelled' | 'immediate_or_cancel' | 'fill_or_kill';

export interface OrderFormData {
    side: OrderSide;
    orderType: OrderTypeTab;
    limitPrice: string;
    amount: string;
    timeInForce: TimeInForce;
    postOnly: boolean;
}

export interface PriceInfo {
    value: string;
    percentage: string;
}

export interface TickerData {
    base: string;
    quote: string;
    price: string;
    changeValue: string;
    changePercentage: string;
    high: PriceInfo;
    low: PriceInfo;
    volume: string;
}

export interface CurrencyPairProps {
    base: string;
    quote: string;
    onClick: () => void;
}

export interface PriceProps {
    value: string;
}

export interface ChangeIndicatorProps {
    value: string;
    percentage: string;
}

export interface StatItemProps {
    label: string;
    value: string;
    isPositive: boolean | null;
}

export type CryptoData = {
    symbol: string;
    name: string;
    baseAsset: string;
    quoteAsset: string;
    price: string;
    change: string;
    changePercent: string;
    volume: string;
    high: {
        value: string;
        percentage: string;
    };
    low: {
        value: string;
        percentage: string;
    };
};

export type StatsSectionProps = {
    selectedMarket: CryptoData;
};

export interface PairTickerProps {
    selectedMarket: CryptoData;
    setSelectedMarket: (market: CryptoData) => void;
}

export interface PairTickerDropDownProps {
    selectedMarket: CryptoData;
    setSelectedMarket: (market: CryptoData) => void;
    setIsDropdownOpen: (isOpen: boolean) => void;
    dropdownRef: RefObject<HTMLDivElement | null>;
}

export type CryptoIconProps = {
    symbol: string;
    size?: 'sm' | 'md' | 'lg';
};

export interface SearchProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export type MarketType = {
    symbol: string;
    baseAsset: string;
    quoteAsset: string;
    price: string;
    change: string;
    changePercent: string;
    volume: string;
}

export interface SearchResultProps {
    market: MarketType;
    handleMarketSelect: (market: MarketType) => void;
}