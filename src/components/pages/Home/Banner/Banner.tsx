import { FC } from 'react';
import image1 from '../../../../assets/slideshow-v1-img1.webp';
import { Button } from '../../../ui/button';
const Banner: FC = () => {
    return (
        <div className=' bg-bgCol'>
            <div className='min-h-[90vh] wrapper'>
                <div className='flex items-center justify-evenly'>
                    <div>
                        <div className='space-y-4'>
                            <h1 className='text-7xl font-bold'>Transit Compass</h1>
                            <p className='text-5xl font-light'> <span className='text-primary font-normal'>40%</span> sell off</p>
                            <p className='text-[#000000] text-xl font-light'>The Story Behind the AppyTimes Summer Camp...</p>
                            <Button>Shop Now</Button>
                        </div>
                    </div>
                    <div>
                        <img src={image1} alt="image1" />
                    </div>
                </div>
            </div>
            {/* 
            <div className='grid grid-cols-2 gap-6'>
                <div className='bg-bgCol flex items-center justify-center px-10 py-10'>
                    <p>Up To 40% Off</p>
                    <h4>Fleece Gloves</h4>
                </div>
                <div className='bg-bgCol flex items-center justify-center px-10 py-10'>
                    <p>Flat 30%</p>
                    <h4>Special Chair</h4>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;