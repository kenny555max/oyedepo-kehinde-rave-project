import Header from "./components/organisms/Header.tsx";
import CryptoTicker from "./components/templates/CryptoTicker.tsx";
import {TradingPlatformTemplate} from "./components/templates/TradingPlatformTemplate.tsx";
import 'resize-observer-polyfill';

function App() {
    return (
        <div className="min-h-screen bg-primary-bg text-text-primary">
            <Header />
            <CryptoTicker />
            <main className="p-4">
                <div className='container'>
                    {/* Main content goes here */}
                    <div>
                        <TradingPlatformTemplate />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;