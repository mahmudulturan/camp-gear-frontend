import { FC, useState } from 'react';
import { Input } from '../../components/ui/input';
import { FaSearch } from 'react-icons/fa';
import SectionHeader from '../../components/ui/section-header';
import { useGetProductsQuery } from '../../redux/features/productsApi';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../components/ui/select';
import AllProducts from './components/AllProducts/AllProducts';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';


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
            <div className='flex items-center justify-between'>
                <div className='flex-1'>
                    <div className='relative'>
                        <div className='absolute h-full top-0 w-9 flex items-center justify-center'>
                            <FaSearch className='text-gray-600' />
                        </div>
                        <Input className='max-w-[332px] w-full pl-9 pr-3' placeholder='Search' />
                    </div>

                </div>
                <div className='flex-1 flex items-center justify-end'>
                    <Select onValueChange={(value) => setSortValue(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by Price" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Sort by price</SelectLabel>
                                <SelectItem value="desc">Highest</SelectItem>
                                <SelectItem value="asc">Lowest</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <AllProducts products={data?.data} />
            <PaginationButtons page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    );
};

export default ProductsPage;