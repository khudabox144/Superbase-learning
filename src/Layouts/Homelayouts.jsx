import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router'; // Fixed import from react-router-dom

const Homelayouts = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar will stay fixed at the top */}
            <Navbar />
            
            {/* Main content area that will change with routes */}
            <main className="flex-grow p-4 mt-16"> {/* mt-16 accounts for fixed navbar height */}
                <Outlet />
            </main>
        </div>
    );
};

export default Homelayouts;