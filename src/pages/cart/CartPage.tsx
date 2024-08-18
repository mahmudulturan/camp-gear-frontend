import { FC } from 'react';
import SectionHeader from '../../components/ui/section-header';
import { Button } from '../../components/ui/button';
import { LuPlus, LuMinus } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { decreaseQuantity, increaseQuantity } from '../../redux/features/cart/cartSlice';
import toast from 'react-hot-toast';
import DeleteCartModal from './components/DeleteCartModal/DeleteCartModal';

const CartPage: FC = () => {
    const { items, totalPrice } = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    const handleIncreaseQuantity = (id: string, current_quantity: number, stock_quantity: number) => {
        if (current_quantity > stock_quantity - 1) {
            return toast.error("Stock quantity exceeded");
        }
        dispatch(increaseQuantity({ _id: id }));
    }
    const handleDecreaseQuantity = (id: string) => {
        dispatch(decreaseQuantity({ _id: id }));
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
                                                <img src={item.image} className='h-[100px]' alt="" />
                                            </div>
                                            <div>
                                                <h1 className='font-semibold text-xl'>{item.title}</h1>
                                                <p className='text-textGray'>{item.description}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span>In Stock: {item.inventory.quantity}</span>
                                        </div>
                                        <div className='space-y-1'>
                                            <div className='flex items-center gap-3'>
                                                <Button onClick={() => item.quantity > 1 && handleDecreaseQuantity(item._id)} size={"icon"} variant={"ghost"}><LuMinus className='size-4' /></Button>
                                                <span className='font-semibold text-lg'>{item.quantity}</span>
                                                <Button onClick={() => handleIncreaseQuantity(item._id, item.quantity, item.inventory.quantity)} size={"icon"} variant={"ghost"}><LuPlus className='size-4' /></Button>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <h6 className='text-lg font-bold'>${item.price.amount}</h6>
                                                <DeleteCartModal id={item._id} />
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