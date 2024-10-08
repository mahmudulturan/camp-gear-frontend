import { FC } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../../ui/dropdown-menu';
import { Button } from '../../ui/button';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hook';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

const CartModal: FC = () => {
    const { totalPrice, totalItems } = useAppSelector(state => state.cart);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="size-10 p-0 relative">
                    <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full px-2'>{totalItems}</span>
                    <AiOutlineShoppingCart className='size-6' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='px-2 py-2 min-w-60 space-y-1'>
                <h3 className="text-lg font-bold">
                    Total Items : {totalItems}
                </h3>

                <h6 className='font-medium'>
                    Total Price : ${totalPrice}
                </h6>
                <DropdownMenuItem className='hover:border-0 hover:bg-none ' asChild>
                    <Link to={'/cart'} className=''>
                        <Button className='w-full mt-3' size={"sm"}>
                            View cart
                        </Button>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CartModal;