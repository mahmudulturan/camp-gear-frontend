import { FC } from 'react';
import { Input } from '../../components/ui/input';
import { FaSearch } from 'react-icons/fa';
import SectionHeader from '../../components/ui/section-header';

const ProductsPage: FC = () => {
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
                        <Input className='max-w-80 w-full pl-9 pr-3' placeholder='Search' />
                    </div>

                </div>
                <div className='flex-1'>

                </div>
            </div>
        </div>
    );
};

export default ProductsPage;