import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/providers/ThemeProviders/ui/ThemeProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <ThemeProvider>
        {/*<React.StrictMode>*/}
            <App/>
        {/*</React.StrictMode>*/}
        </ThemeProvider>
    </BrowserRouter>
);

reportWebVitals();
