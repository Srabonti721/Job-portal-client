import React from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;