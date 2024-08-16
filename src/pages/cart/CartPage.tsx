import { FC } from 'react';
import SectionHeader from '../../components/ui/section-header';
import image from '../../assets/mock-item-images/product14.1.webp';
import { Button } from '../../components/ui/button';
import { LuPlus, LuMinus } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { removeFromCart } from '../../redux/features/cart/cartSlice';

const CartPage: FC = () => {
    const { items, totalPrice } = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    const handleDeleteFromCart = (id: string) => {
        dispatch(removeFromCart({ _id: id }));
    }
    return (
        <div className='wrapper mb-20'>
            <div className='my-10'>
                <SectionHeader title="All Cart Items" />
                <p className='text-textGray text-center my-4'>Here is a list of all cart items</p>
            </div>

            {
                items.length > 0 ?
                    <div className='max-w-5xl mx-auto'>
                        <div className='thin-scrollbar mx-auto my-10 space-y-6 max-h-[50vh] overflow-y-auto'>
                            {
                                items.map((item, index) => (
                                    <div key={index} className='flex items-center justify-between gap-6'>
                                        <div className='flex items-center gap-3'>
                                            <div>
                                            </div>
                                            <div className='h-[100px] bg-[#EFEDEE]'>
                                                <img src={image} className='h-[100px]' alt="" />
                                            </div>
                                            <div>
                                                <h1 className='font-semibold text-xl'>{item.title}</h1>
                                                <p className='text-textGray'>{item.description}</p>
                                            </div>
                                        </div>
                                        <div className='space-y-1'>
                                            <div className='flex items-center gap-3'>
                                                <Button size={"icon"} variant={"ghost"}><LuMinus className='size-4' /></Button>
                                                <span className='font-semibold text-lg'>{item.quantity}</span>
                                                <Button size={"icon"} variant={"ghost"}><LuPlus className='size-4' /></Button>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <h6 className='text-lg font-bold'>${item.price.amount}</h6>
                                                <Button onClick={() => handleDeleteFromCart(item._id)} variant={"outline"} size={"icon"}> <RiDeleteBin6Line className='size-4' />
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
                                <h6 className='text-xl font-semibold text-end'>Total Price: ${totalPrice}</h6>
                                <hr />
                                <Link to={'/checkout'}>
                                    <Button variant={"default"}>Procced to checkout</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='my-20'>
                        <h1 className='text-5xl text-center font-semibold'>Cart is empty!</h1>
                    </div>
            }
        </div>
    );
};

export default CartPage;