import { FC } from 'react';
import SectionHeader from '../../../ui/section-header';
import { IProduct, useGetProductsQuery } from '../../../../redux/features/productsApi';
import ProductCard from './ProductCard';

const BestSelling: FC = () => {
    const { data, isLoading } = useGetProductsQuery(undefined);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className='wrapper'>
            <div className='my-10'>
                <SectionHeader title="Best Selling" />
                <p className='text-textGray text-center my-4'>Don't Miss Our Best Selling</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    data?.data.map((product: IProduct) => (<ProductCard product={product} />))
                }
            </div>
        </div>
    );
};

export default BestSelling;