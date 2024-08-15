import { FC } from 'react';
import CheckoutForm from './Components/CheckoutForm';

const CheckoutPage: FC = () => {
    return (
        <div className='wrapper mt-10 mb-20'>
            <div className='grid grid-cols-2 gap-10'>
                <div className='flex-1 px-6 py-6 rounded-md shadow-xl min-h-[40vh]'>
                    <h2 className='text-3xl font-semibold'>Order Summery</h2>
                </div>
                <div className='flex-1 px-6 py-6 rounded-md shadow-xl min-h-[40vh]'>
                    <h2 className='text-3xl font-semibold'>Checkout</h2>
                    <CheckoutForm />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;