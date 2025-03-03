import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center">
          <div className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We apologize for the inconvenience. Please try refreshing the page or contact our support team if the problem persists.
              </p>
              <div className="space-x-4">
                <button
                  onClick={() => window.location.reload()}
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Refresh Page
                </button>
                <Link
                  to="/"
                  className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Return Home
                </Link>
              </div>
              {import.meta.env.DEV && this.state.error && (
                <div className="mt-8 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-700 font-mono text-left whitespace-pre-wrap">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
