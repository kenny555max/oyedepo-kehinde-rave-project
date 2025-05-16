import React, { useState, useEffect } from 'react';
import {
    LineChart,
    BarChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import {ChartHeader} from "../molecules/ChartHeader.tsx";

// Data interface
type CryptoData = {
    date: string;
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
    isUp: boolean;
};

// Timeframe options
type Timeframe = '1H' | '2H' | '4H' | '1D' | '1W' | '1M';

// Sample Bitcoin data generator
const generateSampleData = (): CryptoData[] => {
    const data: CryptoData[] = [];
    const startDate = new Date('2022-02-01');
    const endDate = new Date('2022-05-25');
    let currentPrice = 36400;

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        const variation = Math.random() * 400 - 200; // -200 to +200
        const open = currentPrice;
        const close = open + variation;
        const high = Math.max(open, close) + Math.random() * 100;
        const low = Math.min(open, close) - Math.random() * 100;
        const volume = Math.floor(Math.random() * 100) + 10;

        data.push({
            date: d.toISOString().split('T')[0],
            open,
            close,
            high,
            low,
            volume,
            isUp: close > open,
        });

        currentPrice = close;
    }

    return data;
};

interface CandleStickProps {
    x: number;
    y: number;
    width: number;
    height: number;
    low: number;
    high: number;
    open: number;
    close: number;
}

// Custom CandleStick component using Recharts primitives
const CandleStick: React.FC<CandleStickProps> = ({ x, y, width, height, low, high, open, close }) => {
    const isUp = close > open;
    const color = isUp ? '#26a69a' : '#ef5350';
    const bodyHeight = Math.abs(open - close);
    const bodyY = Math.min(open, close);

    return (
        <g>
            {/* Wick line from high to low */}
            <line
                x1={x + width / 2}
                y1={y + height - high}
                x2={x + width / 2}
                y2={y + height - low}
                stroke={color}
                strokeWidth={1}
            />
            {/* Candle body */}
            <rect
                x={x}
                y={y + height - bodyY - bodyHeight}
                width={width}
                height={Math.max(1, bodyHeight)}
                fill={color}
            />
        </g>
    );
};

const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
};

export default function BitcoinTradingChart(): JSX.Element {
    const [data, setData] = useState<CryptoData[]>([]);
    const [timeframe, setTimeframe] = useState<Timeframe>('1D');
    const [currentPrice, setCurrentPrice] = useState<number>(36641.64);
    const [priceChange, setPriceChange] = useState<number>(2.33);
    const [amplitude, setAmplitude] = useState<number>(6.59);
    const [activeTime, setActiveTime] = useState<string>('1D');

    useEffect(() => {
        setData(generateSampleData());
    }, []);

    const handleTimeframeChange = (tf: Timeframe): void => {
        setTimeframe(tf);
        // In a real app, you would fetch new data based on timeframe
    };

    // Format for tooltip
    const formatTooltip = (value: number, name: string): [string, string] => {
        if (['high', 'low', 'open', 'close'].includes(name)) {
            return [`$${formatPrice(value)}`, name.charAt(0).toUpperCase() + name.slice(1)];
        }
        return [value.toString(), name];
    };

    return (
        <div className="w-full h-full p-4 bg-primary-border rounded-[8px] text-gray-200">
            <ChartHeader
                activeTime={activeTime}
                onTimeChange={setActiveTime}
            />

            {/* Price info */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex gap-2 items-center">
                    <input type="checkbox" className="w-4 h-4" checked readOnly />
                    <span>BTC/USD</span>
                </div>
                <div className="text-green-500">O {formatPrice(currentPrice)}</div>
                <div className="text-white">H {formatPrice(currentPrice)}</div>
                <div className="text-white">L {formatPrice(currentPrice)}</div>
                <div className="text-green-500">C {formatPrice(currentPrice)}</div>
                <div>
                    Change: <span className="text-green-500">{priceChange}%</span>
                </div>
                <div>
                    Amplitude: <span className="text-green-500">{amplitude}%</span>
                </div>
            </div>

            {/* Main chart */}
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis
                            dataKey="date"
                            stroke="#666"
                            tickFormatter={(date) => {
                                const d = new Date(date);
                                return `${d.getMonth() + 1}/${d.getDate()}`;
                            }}
                            tick={{ fontSize: 10 }}
                            interval={10}
                        />
                        <YAxis
                            domain={["dataMin - 200", "dataMax + 200"]}
                            stroke="#666"
                            orientation="right"
                            tickFormatter={(value) => formatPrice(value)}
                            tick={{ fontSize: 10 }}
                        />
                        <Tooltip formatter={formatTooltip} contentStyle={{ backgroundColor: '#222', border: '1px solid #444' }} labelStyle={{ color: '#999' }} />
                        <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false} isAnimationActive={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Volume chart */}
            <div className="h-32 mt-4">
                <div className="text-gray-400 text-sm mb-2">
                    Vol(BTC): <span className="text-orange-500">65.254K</span> Vol(USDT): <span className="text-orange-500">2.118B</span>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis
                            dataKey="date"
                            stroke="#666"
                            tickFormatter={(date) => {
                                const d = new Date(date);
                                return `${d.getMonth() + 1}/${d.getDate()}`;
                            }}
                            tick={{ fontSize: 10 }}
                            interval={10}
                        />
                        <YAxis stroke="#666" orientation="right" tick={{ fontSize: 10 }} />
                        <Tooltip formatter={(value) => [value, 'Volume']} contentStyle={{ backgroundColor: '#222', border: '1px solid #444' }} labelStyle={{ color: '#999' }} />
                        <Bar dataKey="volume" fill={(data) => (data.isUp ? '#26a69a' : '#ef5350')} isAnimationActive={false} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}