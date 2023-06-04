import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.scss';
import './styles/index.scss';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { useTheme } from './providers/ThemeProviders/lib/useTheme';
import { classNames } from 'src/helpers/classNames/className';
import { BlogsPage } from 'src/pages/Blogs';
import { PostsPage } from 'src/pages/Posts';
import { HomePage } from 'src/pages/MainPage';



function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{},[theme])}>
            <Header/>
            <SideBar/>
            <Suspense fallback={<div>Loading..</div>}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/blogs" element={<BlogsPage/>}/>
                    <Route path="/posts" element={<PostsPage/>}/>
                </Routes>
            </Suspense>
            {/*<Footer/>*/}
            <button onClick={toggleTheme}>Theme</button>
        </div>
    );
}

export default App;
