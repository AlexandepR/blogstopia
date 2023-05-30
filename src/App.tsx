import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './pages/styles/index.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { HomePageAsync } from './pages/MainPage/Home.async';
import { BlogPageAsync } from './pages/Blogs/Blogs.async';
import { PostPageAsync } from './pages/Posts/Posts.async';
import { useTheme } from './theme/useTheme';


function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        // <div className="app-page">
        <div className={`app ${theme}`}>

            <Header/>
            {/*<div className="app-content">*/}
            {/*    <div className="sideBar">*/}
            <SideBar/>
            {/*</div>*/}
            <Suspense fallback={<div>Loading..</div>}>
                <Routes>
                    <Route path="/" element={<HomePageAsync/>}/>
                    <Route path="/blogs" element={<BlogPageAsync/>}/>
                    <Route path="/posts" element={<PostPageAsync/>}/>
                </Routes>
            </Suspense>
            {/*</div>*/}
            {/*// <div className="main_container_footer">*/}
            {/*<Footer/>*/}
            {/*</div>*/}
            <button onClick={toggleTheme}>Theme</button>
        </div>
    );
}

export default App;
