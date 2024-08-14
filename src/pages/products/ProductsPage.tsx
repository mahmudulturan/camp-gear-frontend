import { FC, useState } from 'react';
import { Input } from '../../components/ui/input';
import { FaSearch } from 'react-icons/fa';
import SectionHeader from '../../components/ui/section-header';
import { IProduct, useGetProductsQuery } from '../../redux/features/productsApi';
import ProductCard from '../../components/shared/ProductsCard/ProductCard';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../components/ui/select';


const ProductsPage: FC = () => {
    const [sortValue, setSortValue] = useState<string>('');
    const { data, isLoading } = useGetProductsQuery(undefined);
    if (isLoading) return <div>Loading...</div>;
    console.log(sortValue);
    return (
        <div className='wrapper'>
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 mb-20'>
                {
                    data?.data.slice(0, 8).map((product: IProduct) => (<ProductCard product={product} />))
                }
            </div>
        </div>
    );
};

export default ProductsPage;