import Header from "./components/organisms/Header.tsx";
import CryptoTicker from "./components/templates/CryptoTicker.tsx";
import {TradingPlatformTemplate} from "./components/templates/TradingPlatformTemplate.tsx";
import 'resize-observer-polyfill';
import {AppProvider} from "./lib/context/AppContext.tsx";
import {ToastProvider} from "./lib/context/ToastContext.tsx";
import MobileNavigationTabTemplate from "./components/templates/MobileNavigationTabTemplate.tsx";

function App() {
    return (
        <AppProvider>
            <ToastProvider>
                <div className="min-h-screen bg-primary-bg text-text-primary">
                    <Header />
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
            </ToastProvider>
        </AppProvider>
    );
}

export default App;