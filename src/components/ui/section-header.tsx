import { FC } from 'react';

const SectionHeader: FC<{ title: string }> = ({ title }) => {
    return (
        <div className='text-center'>
            <h2 className='text-[45px] font-semibold'>{title}</h2>
            <div className='border-t-[3px] border-primary max-w-20 mx-auto'></div>
        </div>
    );
};

export default SectionHeader;