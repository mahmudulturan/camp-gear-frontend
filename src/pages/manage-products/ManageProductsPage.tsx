import { FC } from 'react';
import SectionHeader from '../../components/ui/section-header';
import ProductsTable from './components/ProductsTable/ProductsTable';
import { useGetProductsQuery } from '../../redux/features/productsApi';
import AddProductModal from './components/AddProductModal/AddProductModal';

const ManageProductsPage: FC = () => {

    const { data, isLoading } = useGetProductsQuery({});

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className='wrapper mb-20'>
            <div className='my-10'>
                <SectionHeader title="Manage Products" />
                <p className='text-textGray text-center my-4'>Here you can manage your all products</p>
            </div>
            <div className='text-center'>
                <AddProductModal />
            </div>
            <ProductsTable products={data?.data?.products} />
        </div>
    );
};

export default ManageProductsPage;