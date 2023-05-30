import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

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
