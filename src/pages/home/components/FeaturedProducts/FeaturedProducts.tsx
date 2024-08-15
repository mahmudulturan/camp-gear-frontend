import { FC } from 'react';
import SectionHeader from '../../../../components/ui/section-header';
import { IProduct, useGetProductsQuery } from '../../../../redux/features/productsApi';
import ProductCard from '../../../../components/shared/ProductsCard/ProductCard';
import { Button } from '../../../../components/ui/button';

const FeaturedProducts: FC = () => {
    const { data, isLoading } = useGetProductsQuery(undefined);

    if (isLoading) return <div>Loading...</div>;
    return (
        <div className='wrapper'>
            <div className='my-10'>
                <SectionHeader title="Featured Products" />
                <p className='text-textGray text-center my-4'>Exclusive Selection of Our Best Camping Gear</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    data?.data.slice(0, 8).map((product: IProduct) => (<ProductCard key={product._id} product={product} />))
                }
            </div>
            <div className='text-center my-10'>
                <Button variant={"reverse"}>View All</Button>
            </div>
        </div>
    );
};

export default FeaturedProducts;