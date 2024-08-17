import { FC, useState } from 'react';
import SectionHeader from '../../components/ui/section-header';
import ProductsTable from './components/ProductsTable/ProductsTable';
import { useGetProductsQuery } from '../../redux/features/productsApi';
import AddProductModal from './components/AddProductModal/AddProductModal';
import PaginationButtons from '../../components/shared/PaginationButtons/PaginationButtons';
import Loader from '../../components/shared/Loader/Loader';

const ManageProductsPage: FC = () => {
    const [page, setPage] = useState<number>(1);
    const { data, isLoading } = useGetProductsQuery({ page });

    if (isLoading) return <Loader />;

    return (
        <div className='wrapper mb-20'>
            <div className='my-10'>
                <SectionHeader title="Manage Products" />
                <p className='text-textGray text-center my-4'>Here you can manage your all products</p>
            </div>
            <div className='text-center'>
                <AddProductModal />
            </div>
            <ProductsTable page={page} products={data?.data?.products} />
            <PaginationButtons page={page} setPage={setPage} productsCount={data?.data?.productsCount} />
        </div>
    );
};

export default ManageProductsPage;