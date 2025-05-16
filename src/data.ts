import type {Order, OrderType, TradingData} from "./types.ts";

export const SAMPLE_MARKETS = [
    { symbol: 'BTCUSDT', baseAsset: 'BTC', quoteAsset: 'USDT', price: '23,234.60', change: '20.80', changePercent: '0.005', volume: '75,655.26' },
    { symbol: 'ETHUSDT', baseAsset: 'ETH', quoteAsset: 'USDT', price: '1,852.70', change: '15.20', changePercent: '0.008', volume: '45,321.88' },
    { symbol: 'SOLUSDT', baseAsset: 'SOL', quoteAsset: 'USDT', price: '142.65', change: '-2.34', changePercent: '-0.016', volume: '32,567.42' },
    { symbol: 'ADAUSDT', baseAsset: 'ADA', quoteAsset: 'USDT', price: '0.435', change: '0.005', changePercent: '0.012', volume: '18,321.75' },
    { symbol: 'BNBUSDT', baseAsset: 'BNB', quoteAsset: 'USDT', price: '586.30', change: '3.45', changePercent: '0.006', volume: '28,765.30' },
    { symbol: 'XRPUSDT', baseAsset: 'XRP', quoteAsset: 'USDT', price: '0.596', change: '-0.004', changePercent: '-0.007', volume: '15,896.25' },
    { symbol: 'DOGEUSDT', baseAsset: 'DOGE', quoteAsset: 'USDT', price: '0.123', change: '0.002', changePercent: '0.016', volume: '12,345.67' },
    { symbol: 'DOTUSDT', baseAsset: 'DOT', quoteAsset: 'USDT', price: '6.78', change: '-0.12', changePercent: '-0.017', volume: '8,765.43' },
    { symbol: 'AVAXUSDT', baseAsset: 'AVAX', quoteAsset: 'USDT', price: '34.27', change: '0.65', changePercent: '0.019', volume: '9,876.54' }
];

export const generateSampleData = (): TradingData => {
    const basePrice = 36920.12;
    const variation = 100;

    // Generate sell orders (higher than base price)
    const sellOrders: Order[] = Array(5).fill(0).map((_, idx) => {
        const price = basePrice + (idx + 1) * (Math.random() * 10 + 5);
        const amount = 0.758965;
        return {
            price,
            amount,
            total: price * amount,
            type: 'sell'
        };
    }).reverse();

    // Generate buy orders (lower than base price)
    const buyOrders: Order[] = Array(5).fill(0).map((_, idx) => {
        const price = basePrice - (idx + 1) * (Math.random() * 10 + 5);
        const amount = 0.758965;
        return {
            price,
            amount,
            total: price * amount,
            type: 'buy'
        };
    });

    // Generate recent trades
    const recentTrades: Order[] = Array(10).fill(0).map(() => {
        const price = basePrice + (Math.random() * variation * 2 - variation);
        const amount = 0.758965;
        const type: OrderType = Math.random() > 0.5 ? 'buy' : 'sell';
        return {
            price,
            amount,
            total: price * amount,
            type
        };
    });

    return {
        sellOrders,
        buyOrders,
        recentTrades,
        currentPrice: {
            price: basePrice,
            change: 123.45
        }
    };
};