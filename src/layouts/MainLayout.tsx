import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer/Footer';
import Navbar from '../components/layout/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import { useAppSelector } from '../redux/hook';

const MainLayout: FC = () => {
    const { totalItems } = useAppSelector(state => state.cart);

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (totalItems) {
                const message = "Are you sure you want to leave? You have items in your cart.";
                event.preventDefault();
                event.returnValue = message;
                return message;
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [totalItems]);

    return (
        <div className='flex flex-col min-h-screen font-jost'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Navbar />
            <div className='flex-1'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;