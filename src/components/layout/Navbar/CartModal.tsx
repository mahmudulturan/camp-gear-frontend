import { FC } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../../ui/dropdown-menu';
import { Button } from '../../ui/button';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CartModal: FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="size-10 p-0">
                    <AiOutlineShoppingCart className='size-6' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='px-2 py-2 min-w-60 space-y-1'>
                <h3 className="text-lg font-bold">
                    Total Items : 5
                </h3>

                <h6 className='font-medium'>
                    Total Price : $100
                </h6>
                <Link to={'/cart'} className=''>
                    <Button className='w-full mt-3' size={"sm"}>
                        View cart
                    </Button>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CartModal;