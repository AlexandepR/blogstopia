import React from 'react';
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import SideBar from '../components/SideBar';

const MainLayout: React.FC = () => {
    return (
        <div className="wrapper">
            <SideBar />
            <div className="content"><Outlet/></div>
        </div>
    );
};

export default MainLayout;