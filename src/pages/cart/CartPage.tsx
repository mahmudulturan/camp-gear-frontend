import { FC } from 'react';
import SectionHeader from '../../components/ui/section-header';
import image from '../../assets/mock-item-images/product14.1.webp';
import { Button } from '../../components/ui/button';
import { LuPlus, LuMinus } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartPage: FC = () => {
    return (
        <div className='wrapper mb-20'>
            <div className='my-10'>
                <SectionHeader title="All Cart Items" />
                <p className='text-textGray text-center my-4'>Here is a list of all cart items</p>
            </div>
            <div className='max-w-5xl mx-auto'>
                <div className='thin-scrollbar mx-auto my-10 space-y-6 h-[50vh] overflow-y-auto'>
                    {
                        Array(5).fill(0).map((_, index) => (
                            <div key={index} className='flex items-center justify-between gap-6'>
                                <div className='flex items-center gap-3'>
                                    <div>
                                    </div>
                                    <div className='h-[100px] bg-[#EFEDEE]'>
                                        <img src={image} className='h-[100px]' alt="" />
                                    </div>
                                    <div>
                                        <h1 className='font-semibold text-xl'>Fleece Gloves</h1>
                                        <p className='text-textGray'>Warm and Soft for Chilly Nights</p>
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <div className='flex items-center gap-3'>
                                        <Button size={"icon"} variant={"ghost"}><LuMinus className='size-4' /></Button>
                                        <span className='font-semibold text-lg'>2</span>
                                        <Button size={"icon"} variant={"ghost"}><LuPlus className='size-4' /></Button>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h6 className='text-lg font-bold'>$12.99</h6>
                                        <Button variant={"outline"} size={"icon"}> <RiDeleteBin6Line className='size-4' />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <hr />
                <div className='flex items-center justify-end mt-4 mb-10 space-y-3'>
                    <div className='space-y-3'>
                        <h6 className='text-xl font-semibold text-end'>Total Price: $12.99</h6>
                        <hr />
                        <Button variant={"default"}>Procced to checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;