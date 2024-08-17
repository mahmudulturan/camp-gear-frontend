import React, { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Input } from '../../../../components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../../../components/ui/select';
import { useGetCategoriesQuery } from '../../../../redux/features/productsApi';
import { Button } from '../../../../components/ui/button';

type SearchFilterProps = {
    setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc" | "">>;
    setSearchKey: React.Dispatch<React.SetStateAction<string>>;
    setSortProperty: React.Dispatch<React.SetStateAction<string>>;
    sortProperty: string;
    sortOrder: "asc" | "desc" | "";
    setFilterValue: React.Dispatch<React.SetStateAction<string>>;
    filterValue: string;
}

const SearchFilter: FC<SearchFilterProps> = ({ setSortOrder, setSearchKey, sortOrder, setSortProperty, sortProperty, setFilterValue, filterValue }) => {
    const { data } = useGetCategoriesQuery();

    const handleReset = () => {
        setSortOrder('');
        setSortProperty('');
        setFilterValue('');
    }
    return (
        <div className='flex items-center justify-between'>
            <div className='flex-1'>
                <div className='relative'>
                    <div className='absolute h-full top-0 w-9 flex items-center justify-center'>
                        <FaSearch className='text-gray-600' />
                    </div>
                    <Input onChange={(e) => setSearchKey(e.target.value)} className='max-w-[332px] w-full pl-9 pr-3' placeholder='Search' />
                </div>

            </div>
            <div className='flex-1 flex items-center justify-end gap-2'>
                {
                    (filterValue || sortProperty) &&
                    <Button className='h-10 px-6' variant={"outline"} onClick={handleReset}>Reset</Button>
                }
                <div className='flex items-center justify-end'>
                    <Select value={filterValue} onValueChange={(value) => setFilterValue(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Filter by categories</SelectLabel>
                                {data?.data?.map((category) => (
                                    <SelectItem key={category} value={category}>{category}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex items-center justify-end'>
                    <Select value={sortOrder} onValueChange={(value) => {
                        value == "asc" ? setSortOrder("asc") : setSortOrder("desc");
                        setSortProperty("price");
                    }}>
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
        </div>
    );
};

export default SearchFilter;