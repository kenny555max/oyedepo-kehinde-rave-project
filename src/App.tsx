import 'resize-observer-polyfill';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from "./lib/context/AppContext";
import { ToastProvider } from "./lib/context/ToastContext";
import Layout from './components/Layout.tsx';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// @ts-ignore
import './index.css'

const Home = lazy(() => import('./pages/HomePage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <AppProvider>
                    <ToastProvider>
                        <Layout>
                            <Suspense fallback={<LoadingSpinner />}>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/404" element={<NotFound />} />
                                    <Route path="*" element={<Navigate to="/404" replace />} />
                                </Routes>
                            </Suspense>
                        </Layout>
                    </ToastProvider>
                </AppProvider>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;