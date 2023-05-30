import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Blogs from '../pages/Blogs/Blogs';

const SideBar = () => {
    return (
        // <div className="sideBar">
        <div>
            <div className="sideBar-container">
                <nav>
                    <ul className="sideBar-list">
                        <li className="blogs"><Link to="/">Home</Link></li>
                        <li className="blogs"><Link to="/blogs">Blogs</Link></li>
                        <li className="posts"><Link to="/posts">Posts</Link></li>
                    </ul>
                </nav>
                {/*<Routes>*/}
                {/*    <Route path='/blogs' element = {<Blogs />} />*/}
                {/*</Routes>*/}
            </div>
        </div>
    );
};

export default SideBar;