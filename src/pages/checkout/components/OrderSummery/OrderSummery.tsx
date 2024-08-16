import { FC } from 'react';
import { ICartState } from '../../../../redux/features/cart/cartSlice';


const OrderSummery: FC<Partial<ICartState>> = ({ items, totalPrice }) => {
    return (
        <div className='my-6'>
            <div className='space-y-3'>
                {
                    items?.map((item, index) => (
                        <div key={index} className='flex items-center justify-between gap-6'>
                            <div className='flex items-center gap-3'>
                                <span>{index + 1}.</span>
                                <h6 className='font-medium'>{item.title} <span className='text-gray-600 text-sm ml-5'>x{item.quantity}</span></h6>
                            </div>
                            <h6 className='font-semibold text-lg'>${item.price.amount}</h6>
                        </div>
                    ))
                }
            </div>
            <hr className='my-3' />
            <div className='flex items-center justify-between gap-6'>
                <h6 className='font-semibold text-xl'>Total</h6>
                <h6 className='font-semibold text-xl'>${totalPrice}</h6>
            </div>
        </div>
    );
};

export default OrderSummery;