import React, { FC, useEffect, useState } from 'react';
import { Button } from '../../ui/button';

type TPaginationButtonsProps = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    productsCount: number | undefined;
}

const PaginationButtons: FC<TPaginationButtonsProps> = ({ page, setPage, productsCount }) => {
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        if (!productsCount) {
            setTotalPages(1);
        } else {
            setTotalPages(productsCount % 8 === 0 ? productsCount / 8 : Math.floor(productsCount / 8) + 1);
        }
    }, [productsCount])

    return (
        <div className='my-10 flex items-center justify-end'>
            <div className='flex items-center gap-3 flex-wrap'>
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