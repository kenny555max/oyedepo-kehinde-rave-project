import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can log the error to an error reporting service here
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full">
                        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
                        <p className="mb-4 text-gray-700">
                            We're sorry, but an error occurred while rendering this page. Please try refreshing the page or contact support if the problem persists.
                        </p>
                        <div className="mt-4">
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                onClick={() => window.location.reload()}
                            >
                                Refresh Page
                            </button>
                        </div>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mt-6 p-4 bg-gray-100 rounded overflow-auto text-sm">
                                <p className="font-bold mb-2">Error details (visible in development only):</p>
                                <p className="text-red-700">{this.state.error.toString()}</p>
                                {this.state.errorInfo && (
                                    <pre className="mt-2 whitespace-pre-wrap text-gray-800">
                                        {this.state.errorInfo.componentStack}
                                  </pre>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;