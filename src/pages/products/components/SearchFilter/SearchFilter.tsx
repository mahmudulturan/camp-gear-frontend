import React, { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Input } from '../../../../components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../../../components/ui/select';

type SearchFilterProps = {
    setSortValue: React.Dispatch<React.SetStateAction<string>>
}

const SearchFilter: FC<SearchFilterProps> = ({ setSortValue }) => {
    return (
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
    );
};

export default SearchFilter;