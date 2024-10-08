import { FC } from 'react';
import { FaCheck } from 'react-icons/fa';

const SuccessPage: FC = () => {
    return (
        <div className='flex items-center justify-center' style={{ minHeight: 'calc(100vh - 116px)' }}>
            <div className='text-center space-y-2'>
                <div className='flex items-center justify-center my-3'>
                    <span className='py-10 bg-green-400 rounded-full flex items-center justify-center size-20'>
                        <FaCheck className='size-10 text-white' />
                    </span>
                </div>
                <h1 className='text-5xl font-bold'>Success</h1>
                <p className='text-3xl font-light'>Your order has been placed</p>
            </div>
        </div>
    );
};

export default SuccessPage;