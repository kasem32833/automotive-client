import React from 'react';
import Home from '../assets/pages/Home';
import { Outlet } from 'react-router-dom';
import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;