import { FC } from 'react';
import paymentIcons from '../../../assets/icons/payment.png';
import { FaPinterestP, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../../../assets/camp-gear-logo.png';
import { MdOutlineCallEnd, MdOutlineMail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <div className='wrapper py-10 flex items-start justify-between'>
                <div className='w-3/12'>
                    <div className=' -ml-6'>
                        <Link to={'/'}>
                            <img src={logo} alt="logo of camp gear" />
                        </Link>
                    </div>
                    <div className='my-3'>
                        <div className='flex items-center justify-start gap-3'>
                            <MdOutlineCallEnd className="size-5" />
                            <span className='font-medium'>0175485784554</span>
                        </div>
                        <div className='flex items-center justify-start gap-3'>
                            <MdOutlineMail className="size-5" />
                            <span>contact@campgear.com</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-20'>
                    <div>
                        <h6 className='uppercase font-bold text-sm'>INFORMATION</h6>
                        <div className='flex flex-col gap-3 my-3 text-gray-500 font-medium'>
                            <Link to={'/about'}>
                                About
                            </Link>
                            <Link to={'/blog'}>
                                Blog
                            </Link>
                            <Link to={'/contact'}>
                                Contact
                            </Link>
                            <Link to={'/services'}>
                                Services
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h6 className='uppercase font-bold text-sm'>ACCOUNT</h6>
                        <div className='flex flex-col gap-3 my-3 text-gray-500 font-medium'>
                            <Link to={'#'}>
                                My Account
                            </Link>
                            <Link to={'#'}>
                                Shopping Cart
                            </Link>
                            <Link to={'#'}>
                                Custom Service
                            </Link>
                            <Link to={'#'}>
                                Delivery Infomation
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h6 className='uppercase font-bold text-sm'>SHIPPING</h6>
                        <div className='flex flex-col gap-3 my-3 text-gray-500 font-medium'>
                            <Link to={'#'}>
                                Weekly Ad
                            </Link>
                            <Link to={'#'}>
                                Top Brands
                            </Link>
                            <Link to={'#'}>
                                Store Services
                            </Link>
                            <Link to={'#'}>
                                Promos & Coupons
                            </Link>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <h6 className='uppercase font-bold text-sm'>SUBSCRIBE TO OUR NEWSLETTER</h6>
                    <div className='space-y-3 my-3'>
                        <Input placeholder="Enter your email" type="email" />
                        <Button variant={"reverse"}>Subscribe</Button>
                    </div>
                </div>
            </div>

            {/* copyright section start */}
            <div className='py-6 border-t'>
                <div className="wrapper flex items-center justify-between">
                    <div>
                        <p>© Copyright {currentYear} | Camp Gear By Soft Era. Powered by Innovation Inc.</p>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <button><FaXTwitter className='size-5 text-gray-500' /></button>
                        <button><FaPinterestP className='size-5 text-gray-500' /></button>
                        <button><FaYoutube className='size-5 text-gray-500' /></button>
                        <button><FaInstagram className='size-5 text-gray-500' /></button>
                        <button><FaFacebookF className='size-5 text-gray-500' /></button>
                    </div>
                    <img src={paymentIcons} alt="payment icons" />
                </div>
            </div>
        </div>
    );
};

export default Footer;