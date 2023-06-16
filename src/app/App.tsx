import React, { Suspense } from 'react'
import '../App.scss'
import './styles/index.scss'
import Header from '../components/Header'
import { useTheme } from './providers/ThemeProviders/lib/useTheme'
import { classNames } from 'src/shared/lib/classNames/className'
import { Sidebar } from 'src/widgets/Sidebar'
import { Navbar } from 'src/widgets/Navbar'
import { AppRouter } from 'src/app/providers/router'

function App () {
  const { theme } = useTheme()
  return (
        <div className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
                <Header />
                <Navbar />
                {/* <Component /> */}
                <div className="content-page">
                  <Sidebar />
                  <AppRouter />
              </div>
            </Suspense>
          {/* <Footer/> */}
      </div>
    );
}

export default App
