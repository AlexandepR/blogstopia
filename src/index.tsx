import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import './shared/config/i18n/i18n';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { ThemeProvider } from './app/providers/ThemeProviders';
import { StoreProvider } from 'app/providers/StoreProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root')!
);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
);

reportWebVitals();
