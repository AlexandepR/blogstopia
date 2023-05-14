import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import SideBar from './components/SideBar';
import Blogs from './pages/Blogs';
import Posts from './pages/Posts';
import MainLayout from './layots/MainLayout';
import Footer from './components/Footer';


function App() {
    return (
        <div className="app-page">
            <Header/>
            <div className="app-content">
                <div className="sideBar">
                    <SideBar/>
                </div>
                <Routes>
                    {/*<Route path='' element={<MainLayout />}/>*/}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/blogs" element={<Blogs/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                </Routes>
            </div>
            <div className="main_container_footer">
            <Footer/>
            </div>
        </div>
    );
}

export default App;
