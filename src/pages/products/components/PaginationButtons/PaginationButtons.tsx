import React, { FC } from 'react';
import { Button } from '../../../../components/ui/button';

type TPaginationButtonsProps = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
}

const PaginationButtons: FC<TPaginationButtonsProps> = ({ page, setPage, totalPages }) => {

    return (
        <div className='my-10 flex items-center justify-end'>
            <div className='flex items-center gap-3'>
                <Button onClick={() => page > 1 && setPage(page - 1)} variant={"outline"} className='h-10 px-6'>Prev</Button>
                {
                    [...Array(totalPages)].map((_, index) => (
                        <Button key={index} onClick={() => setPage(index + 1)} variant={page === index + 1 ? "active" : "outline"} className='h-10 px-6'>{index + 1}</Button>
                    ))
                }
                <Button onClick={() => page < totalPages && setPage(page + 1)} variant={"outline"} className='h-10 px-6'>Next</Button>
            </div>
        </div>
    );
};

export default PaginationButtons;