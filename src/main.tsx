import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react'; // Import ClerkProvider
import App from './App';
import ScrollToTop from './components/utils/ScrollToTop';
import ErrorBoundary from './components/utils/ErrorBoundary';
import './index.css';

const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY; // Use environment variable for Clerk frontend API key

if (!clerkFrontendApi) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ClerkProvider 
        publishableKey={clerkFrontendApi} // Update to use publishableKey
      >
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </ClerkProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
