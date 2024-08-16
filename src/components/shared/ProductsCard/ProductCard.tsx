import { FC } from 'react';
import { IProduct } from '../../../redux/features/productsApi';

import image1 from '../../../assets/mock-item-images/produc5.webp';
import image2 from '../../../assets/mock-item-images/product12_5ad78891-a8aa-4fbf-868e-91c6a471d073.webp';
import image3 from '../../../assets/mock-item-images/product14.1.webp';
import image4 from '../../../assets/mock-item-images/product15.webp';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { addToCart } from '../../../redux/features/cart/cartSlice';
import toast from 'react-hot-toast';


const images = [image1, image2, image3, image4];

const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
    const { items } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    const isExist = items.find(item => item._id === product._id) || {
        quantity: 0
    };

    const handleAddToCart = () => {
        if (isExist?.quantity > product?.inventory?.quantity - 1) {
            return toast.error("Stock quantity exceeded");
        }
        dispatch(addToCart(product));
        toast.success("Product added to cart")
    }
    return (
        <div className='group'>
            <div className='bg-[#EFEDEE] relative overflow-hidden cursor-pointer'>
                <img src={images[0]} alt={product?.title} className='object-cover' />
                <Link to={`/products/${product?._id}`}>
                    <button className='w-full text-center hover:text-primary bg-white py-2 font-semibold absolute bottom-0 translate-y-full group-hover:translate-y-0 origin-bottom transition-all duration-300 left-0'>View Details</button>
                </Link>
            </div>
            <div className='mt-4'>
                <h6 className='font-medium cursor-pointer hover:text-primary duration-300'>{product?.title}</h6>
                <div className='relative overflow-hidden'>
                    <p className='font-semibold text-primary'>${product?.price?.amount}</p>
                    <button onClick={handleAddToCart} className='uppercase font-medium text-xs border-b-[1.5px] border-primary pb-0.5 text-primary bg-white absolute bottom-0 left-0 translate-y-full group-hover:translate-y-0 origin-bottom transition-all duration-300 pt-0.5'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;