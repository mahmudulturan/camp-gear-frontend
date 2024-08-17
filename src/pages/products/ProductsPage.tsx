import { FC, useEffect, useState } from 'react';
import SectionHeader from '../../components/ui/section-header';
import { useGetProductsQuery } from '../../redux/features/productsApi';

import AllProducts from './components/AllProducts/AllProducts';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';
import SearchFilter from './components/SearchFilter/SearchFilter';
import Loader from '../../components/shared/Loader/Loader';


const ProductsPage: FC = () => {
    const [page, setPage] = useState<number>(1);
    const [sortValue, setSortValue] = useState<string>('');
    const [searchKey, setSearchKey] = useState<string>('');
    const [totalPages, setTotalPages] = useState<number>(1);
    const query = {
        searchKey,
        sortValue,
        page
    }


    const { data, isLoading } = useGetProductsQuery(query);



    useEffect(() => {
        const productsCount = data?.data.productsCount;
        if (!productsCount) {
            setTotalPages(1);
        } else {
            setTotalPages(productsCount % 8 === 0 ? productsCount / 8 : Math.floor(productsCount / 8) + 1);
        }
    }, [data?.data.productsCount])

    if (isLoading) return <Loader />;

    return (
        <div className='wrapper mb-20'>
            <div className='my-10'>
                <SectionHeader title="All Products" />
                <p className='text-textGray text-center my-4'>Here is a list of all products</p>
            </div>
            <SearchFilter setSearchKey={setSearchKey} setSortValue={setSortValue} />
            <AllProducts products={data?.data.products} />
            <PaginationButtons page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    );
};

export default ProductsPage;