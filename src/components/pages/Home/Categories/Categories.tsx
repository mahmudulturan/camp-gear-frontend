import { FC } from 'react';
import SectionHeader from '../../../ui/section-header';

import backpackImage from '../../../../assets/home/categories/backpack.webp';
import footwearImage from '../../../../assets/home/categories/footwear.webp';
import campingImage from '../../../../assets/home/categories/camping.webp';
import skiSnowsportsImage from '../../../../assets/home/categories/ski_snow_sports.webp';
import { Button } from '../../../ui/button';
import { Link } from 'react-router-dom';



const Categories: FC = () => {
    return (
        <div>
            <div className='wrapper my-10'>
                <SectionHeader title="Shop By Category" />
                <p className='text-textGray text-center my-4'>Explore Our Products By Categories</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8'>
                <Link to={"#"}>
                    <div className='max-h-[450px] overflow-hidden relative'>
                        <div className='absolute bottom-0 w-full z-10 px-2 py-2 space-y-2'>
                            <h3 className='text-3xl font-medium text-white uppercase'>Backpacks</h3>
                            <Button className='bg-white text-black hover:text-white'>Shop Now</Button>
                        </div>
                        <div className='bg-categorySectionBg absolute top-0 h-full w-full' />
                        <img src={backpackImage} alt="" />
                    </div>
                </Link>
                <div className='max-h-[450px] overflow-hidden relative'>
                    <Link to={"#"}>
                        <div className='absolute bottom-0 w-full z-10 px-2 py-2 space-y-2'>
                            <h3 className='text-3xl font-medium text-white uppercase'>Footwear</h3>
                            <Button className='bg-white text-black hover:text-white'>Shop Now</Button>
                        </div>
                        <div className='bg-categorySectionBg absolute top-0 h-full w-full' />
                        <img src={footwearImage} alt="" />
                    </Link>
                </div>
                <div className='max-h-[450px] overflow-hidden relative'>
                    <Link to={"#"}>
                        <div className='absolute bottom-0 w-full z-10 px-2 py-2 space-y-2'>
                            <h3 className='text-3xl font-medium text-white uppercase'>Camping</h3>
                            <Button className='bg-white text-black hover:text-white'>Shop Now</Button>
                        </div>
                        <div className='bg-categorySectionBg absolute top-0 h-full w-full' />
                        <img src={campingImage} alt="" />
                    </Link>
                </div>
                <div className='max-h-[450px] overflow-hidden relative'>
                    <Link to={"#"}>
                        <div className='absolute bottom-0 w-full z-10 px-2 py-2 space-y-2'>
                            <h3 className='text-3xl font-medium text-white uppercase'>Ski & Snowsports</h3>
                            <Button className='bg-white text-black hover:text-white'>Shop Now</Button>
                        </div>
                        <div className='bg-categorySectionBg absolute top-0 h-full w-full' />
                        <img src={skiSnowsportsImage} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;