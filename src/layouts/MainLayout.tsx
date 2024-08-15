import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer/Footer';
import Navbar from '../components/layout/Navbar/Navbar';

const MainLayout: FC = () => {
    return (
        <div className='flex flex-col min-h-screen font-jost'>
            <Navbar />
            <div className='flex-1'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;