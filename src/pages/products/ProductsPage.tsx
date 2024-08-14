import { FC, useState } from 'react';
import { Input } from '../../components/ui/input';
import { FaSearch } from 'react-icons/fa';
import SectionHeader from '../../components/ui/section-header';
import { useGetProductsQuery } from '../../redux/features/productsApi';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../components/ui/select';
import AllProducts from './components/AllProducts/AllProducts';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';
import SearchFilter from './components/SearchFilter/SearchFilter';


const ProductsPage: FC = () => {
    const [page, setPage] = useState<number>(1);
    const [sortValue, setSortValue] = useState<string>('');
    const { data, isLoading } = useGetProductsQuery(undefined);


    const totalPages = 5;

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className='wrapper mb-20'>
            <div className='my-10'>
                <SectionHeader title="All Products" />
                <p className='text-textGray text-center my-4'>Here is a list of all products</p>
            </div>
            <SearchFilter setSortValue={setSortValue} />
            <AllProducts products={data?.data} />
            <PaginationButtons page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    );
};

export default ProductsPage;