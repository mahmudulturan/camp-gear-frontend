import { FC } from 'react';
import SectionHeader from '../../../ui/section-header';
import { IProduct, useGetProductsQuery } from '../../../../redux/features/productsApi';

const BestSelling: FC = () => {
    const { data, isLoading } = useGetProductsQuery(undefined);

    if (isLoading) return <div>Loading...</div>;
    console.log(data?.data);
    return (
        <div className='wrapper'>
            <div className='my-10'>
                <SectionHeader title="Best Selling" />
                <p className='text-textGray text-center my-4'>Don't Miss Our Best Selling</p>
            </div>
            <div className='grid grid-cols-4 gap-6'>
                {
                    data?.data.map((product: IProduct) => (
                        <div key={product?._id} className='my-5'>
                            <img src={product?.image[0]} alt={product?.title} className='w-full h-80 object-cover' />
                            <p className='text-center font-semibold'>{product?.title}</p>
                            <p className='text-center font-semibold'>${product?.price?.amount}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BestSelling;