import { FC } from 'react';
import SectionHeader from '../../components/ui/section-header';
import ProductsTable from './components/ProductsTable/ProductsTable';
import { useGetProductsQuery } from '../../redux/features/productsApi';

const ManageProductsPage: FC = () => {

    const { data, isLoading } = useGetProductsQuery(undefined);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className='wrapper mb-20'>
            <div className='my-10'>
                <SectionHeader title="Manage Products" />
                <p className='text-textGray text-center my-4'>Here you can manage your all products</p>
            </div>
            <ProductsTable products={data?.data} />
        </div>
    );
};

export default ManageProductsPage;