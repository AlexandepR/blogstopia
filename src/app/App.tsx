import React, { Suspense } from 'react';
import '../App.scss';
import './styles/index.scss';
import Header from '../components/Header';
import { useTheme } from './providers/ThemeProviders/lib/useTheme';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/className';

function App () {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Header/>
                <Navbar/>
                {/* <Component /> */}
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
            {/* <Footer/> */}
        </div>
    );
}

export default App;
