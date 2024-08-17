import { FC, useState } from 'react';
import SectionHeader from '../../components/ui/section-header';
import { useGetProductsQuery } from '../../redux/features/productsApi';

import AllProducts from './components/AllProducts/AllProducts';
import PaginationButtons from '../../components/shared/PaginationButtons/PaginationButtons';
import SearchFilter from './components/SearchFilter/SearchFilter';
import Loader from '../../components/shared/Loader/Loader';


const ProductsPage: FC = () => {
    const [page, setPage] = useState<number>(1);
    const [sortProperty, setSortProperty] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
    const [filterValue, setFilterValue] = useState<string>('');
    const [searchKey, setSearchKey] = useState<string>('');

    const query = {
        searchKey,
        sortOrder,
        sortProperty,
        page,
        filterValue
    }

    const { data, isLoading } = useGetProductsQuery(query);

    if (isLoading) return <Loader />;

    return (
        <div className='wrapper mb-20'>
            <div className='my-10'>
                <SectionHeader title="All Products" />
                <p className='text-textGray text-center my-4'>Here is a list of all products</p>
            </div>
            <SearchFilter searchKey={searchKey} filterValue={filterValue} setSearchKey={setSearchKey} setSortOrder={setSortOrder} setFilterValue={setFilterValue} sortProperty={sortProperty} sortOrder={sortOrder} setSortProperty={setSortProperty} />
            {
                data?.data.products?.length === 0 ? <div className='min-h-[50vh] flex items-center justify-center my-10'>
                    <h3 className='text-3xl'>No products found</h3>
                </div>
                    :
                    <>
                        <AllProducts products={data?.data.products} />
                        <PaginationButtons page={page} setPage={setPage} productsCount={data?.data.productsCount} />
                    </>
            }
        </div>
    );
};

export default ProductsPage;