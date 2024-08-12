import { FC } from 'react';

const DiscountBanner: FC = () => {
    return (
        <div
            style={{ backgroundImage: "url(https://i.ibb.co/0q9Z5CT/bg-banner-v2-1.webp)", backgroundSize: "cover", backgroundPosition: "center", backgroundPositionX: "center", backgroundPositionY: "center", backgroundAttachment: "fixed" }}
        >
            <div className='wrapper min-h-[70vh] flex items-center justify-start'>
                <div className='bg-white h-[402px] w-[358px] p-4 '>
                    <div className='border h-full border-[#cdcdcd] flex flex-col items-center justify-evenly text-center'>
                        <h6 className='text-[28px]'>Discount every Monday</h6>
                        <div>
                            <h1 className='font-black text-[100px] text-[#222222]'>15%</h1>
                            <p className='font-extrabold text-lg text-[#222222]' style={{ letterSpacing: "6px" }}>off everything</p>
                        </div>
                        <button className='text-sm font-semibold uppercase border-b-2 border-black hover:border-primary hover:text-primary duration-300'>Shop now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;