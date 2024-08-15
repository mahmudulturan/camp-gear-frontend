import { FC } from 'react';
import logo from '../../../assets/camp-gear-logo.png';
import { Link, NavLink } from 'react-router-dom';
// import { IoIosSearch, IoMdHeartEmpty } from 'react-icons/io';
// import { HiOutlineUser } from 'react-icons/hi';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartModal from './CartModal';
const Navbar: FC = () => {

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
            name: 'Product Management',
            path: '/manage-products'
        },
        {
            name: 'About',
            path: '/about'
        }
    ]
    return (
        <div className='sticky top-0 bg-white/90 z-50'>
            <div className='py-3 wrapper flex items-center justify-between overflow-hidden'>
                <div className='w-3/12 -ml-5'>
                    <Link to={'/'}>
                        <img src={logo} alt="camp gear's logo" />
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
                <div className='flex items-center gap-2'>
                    {/* <button> <IoIosSearch className='size-6' /> </button>
                    <button> <HiOutlineUser className='size-6' /> </button>
                    <button> <IoMdHeartEmpty className='size-6' /> </button> */}
                    {/* <Link to={'/cart'}>
                        <button> <AiOutlineShoppingCart className='size-6' /> </button>
                    </Link> */}
                    <CartModal />
                </div>
            </div>
        </div>
    );
};

export default Navbar;