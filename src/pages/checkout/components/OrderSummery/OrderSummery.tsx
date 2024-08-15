import { FC } from 'react';

const OrderSummery: FC = () => {
    return (
        <div className='my-6'>
            <div className='space-y-3'>
                {
                    Array(5).fill(0).map((_, index) => (
                        <div className='flex items-center justify-between gap-6'>
                            <div className='flex items-center gap-3'>
                                <span>{index + 1}.</span>
                                <h6 className='font-medium'>Glimmer Lamps</h6>
                            </div>
                            <h6 className='font-semibold text-lg'>$120.00</h6>
                        </div>
                    ))
                }
            </div>
            <hr className='my-3' />
            <div className='flex items-center justify-between gap-6'>
                <h6 className='font-semibold text-xl'>Total</h6>
                <h6 className='font-semibold text-xl'>$120.00</h6>
            </div>
        </div>
    );
};

export default OrderSummery;