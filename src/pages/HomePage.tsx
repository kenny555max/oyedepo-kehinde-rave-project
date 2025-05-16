import CryptoTicker from "../components/templates/CryptoTicker.tsx";
import {TradingPlatformTemplate} from "../components/templates/TradingPlatformTemplate.tsx";
import MobileNavigationTabTemplate from "../components/templates/MobileNavigationTabTemplate.tsx";

export default function HomePage() {
    return(
        <div className="min-h-screen bg-primary-bg text-text-primary">
            {/*<Header />*/}
            <CryptoTicker />
            <main className="p-4">
                <div className='container'>
                    {/* Main content goes here */}
                    <div>
                        <TradingPlatformTemplate />
                        <MobileNavigationTabTemplate />
                    </div>
                </div>
            </main>
        </div>
    );
}