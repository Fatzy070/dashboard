import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';

const Layout = () => {
    return (
        <div className="flex m-3.5 gap-3">
            {/* Sidebar */}
            <div className="hidden lg:block">
                <div className="fixed ">
                    <SideNav />
                </div>
            </div>

            {/* Main content */}
            <main className="flex-1 lg:ml-[285px]">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
