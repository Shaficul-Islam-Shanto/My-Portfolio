import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const RouteLayout = () => {
    return (
        <div>
            <header className='max-w-7xl mx-auto'><Navbar></Navbar></header>
            <main className='max-w-7xl mx-auto'><Outlet></Outlet></main>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default RouteLayout;