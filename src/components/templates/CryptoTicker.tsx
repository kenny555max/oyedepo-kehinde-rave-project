import {useState} from 'react';
import type {CryptoData} from "../../types.ts";
import StatsSection from "../organisms/StatsSection.tsx";
import PairTicker from "../organisms/PairTicker.tsx";

const CryptoTicker: React.FC = () => {
    const [selectedMarket, setSelectedMarket] = useState<CryptoData>({
        symbol: 'BTCUSDT',
        name: 'Bitcoin',
        baseAsset: 'BTC',
        quoteAsset: 'USDT',
        price: '20,634',
        change: '20.80',
        changePercent: '+1.25',
        volume: '75,655.26',
        high: {
            value: '520.80',
            percentage: '+1.25'
        },
        low: {
            value: '520.80',
            percentage: '+1.25'
        }
    });

    return (
        <div className="bg-primary-bg border-b border-primary-border w-full">
            <div className="container p-2">
                <div className="rounded-md bg-primary-border p-4 flex lg:flex-row flex-col lg:gap-0 gap-4 ld:items-center">
                    {/* Left section with currency pair and price */}
                    <PairTicker selectedMarket={selectedMarket} setSelectedMarket={setSelectedMarket} />

                    {/* Stats section */}
                    <StatsSection selectedMarket={selectedMarket} />
                </div>
            </div>
        </div>
    );
};

export default CryptoTicker;