import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';

const MainLayout: FC = () => {
    return (
        <div className='flex flex-col min-h-screen font-jost'>
            <Header />
            <div className='flex-1'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;