import { FC } from 'react';
import paymentIcons from '../../../assets/icons/payment.png';
import { FaPinterestP, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Footer: FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>

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