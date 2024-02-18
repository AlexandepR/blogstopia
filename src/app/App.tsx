import React, { Suspense } from 'react';
import Header from 'components/Header';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
// import './styles/index.scss';
// import Header from 'components/Header';
// import { useTheme } from 'app/providers/ThemeProviders'

function App () {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Header/>
                <Navbar/>
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
