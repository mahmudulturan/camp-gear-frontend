import { FC } from 'react';
import OrderSummery from './components/OrderSummery/OrderSummery';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import { useAppSelector } from '../../redux/hook';

const CheckoutPage: FC = () => {
    const { items, totalPrice, totalItems } = useAppSelector(state => state.cart);

    return (
        <div className='wrapper mt-10 mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='flex-1 px-6 py-6 rounded-md shadow-xl min-h-[40vh]'>
                    <h2 className='text-3xl font-semibold'>Order Summery</h2>
                    <OrderSummery items={items} totalPrice={totalPrice} />
                </div>
                <div className='flex-1 px-6 py-6 rounded-md shadow-xl min-h-[40vh]'>
                    <h2 className='text-3xl font-semibold'>Checkout</h2>
                    <CheckoutForm items={items} totalPrice={totalPrice} totalItems={totalItems} />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;