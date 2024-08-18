import { FC, useState } from 'react';
import logo from '../../../assets/camp-gear-logo.png';
import { Link, NavLink } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import CartModal from './CartModal';
import { Button } from '../../ui/button';

const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Products',
            path: '/products'
        },
        {
            name: 'Manage Products',
            path: '/manage-products'
        },
        {
            name: 'About',
            path: '/about'
        }
    ]
    return (
        <div className='sticky top-0 bg-white/90 z-50 overflow-hidden'>
            <div className='py-3 wrapper flex items-center justify-between'>
                <div className='w-8/12 md:w-3/12 -ml-5'>
                    <Link to={'/'}>
                        <img src={logo} alt="camp gear's logo" className='w-[202px] h-[53px] md:w-auto md:h-auto' />
                    </Link>
                </div>
                <div className='md:flex items-center gap-8 hidden'>
                    {
                        routes.map((route, index) => {
                            return (
                                <NavLink key={index} to={route.path} className={({ isActive }) =>
                                    isActive ? "text-primary font-medium text-[17px] uppercase duration-300" : "text-[17px] font-medium uppercase hover:text-primary duration-300"
                                }>{route.name}</NavLink>
                            )
                        })
                    }
                </div>
                <div className={`md:hidden flex flex-col fixed bg-white/90 top-[77px] left-0 px-3 py-5 gap-3 w-3/4 ${isOpen ? 'translate-x-0' : '-translate-x-full'} duration-300 `}>
                    {
                        routes.map((route, index) => {
                            return (
                                <NavLink key={index} to={route.path} className={({ isActive }) =>
                                    isActive ? "text-primary font-medium text-[17px] uppercase duration-300" : "text-[17px] font-medium uppercase hover:text-primary duration-300"
                                }>{route.name}</NavLink>
                            )
                        })
                    }
                </div>
                <div className='flex items-center gap-2'>
                    <Button variant={"outline"} className="size-10 p-0 md:hidden" onClick={() => setIsOpen(pre => !pre)}> {isOpen ? <IoClose className='size-6' /> : <IoIosMenu className='size-6' />} </Button>
                    <CartModal />
                </div>
            </div>
        </div>
    );
};

export default Navbar;