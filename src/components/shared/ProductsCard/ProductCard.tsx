import { FC } from 'react';
import { IProduct } from '../../../redux/features/productsApi';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { addToCart } from '../../../redux/features/cart/cartSlice';
import toast from 'react-hot-toast';



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
            <div className='bg-[#EFEDEE] relative overflow-hidden cursor-pointer w-[334px] h-[339px]'>
                <img src={product.image} alt={product?.title} className='object-cover  w-[334px] h-[339px] border' />
                <Link to={`/products/${product?._id}`}>
                    <button className='w-full text-center hover:text-primary bg-white py-2 font-semibold absolute bottom-0 translate-y-full group-hover:translate-y-0 origin-bottom transition-all duration-300 left-0'>View Details</button>
                </Link>
            </div>
            <div className='mt-4'>
                <h6 className='font-medium cursor-pointer hover:text-primary duration-300'>{product?.title}</h6>
                <div className='relative overflow-hidden'>
                    <p className='font-semibold text-primary'>${product?.price?.amount}</p>
                    <button onClick={handleAddToCart} disabled={!product.inventory.inStock} className='uppercase font-medium text-xs border-b-[1.5px] border-primary pb-0.5 text-primary bg-white absolute bottom-0 left-0 translate-y-full group-hover:translate-y-0 origin-bottom transition-all duration-300 pt-0.5'>
                        {product.inventory.inStock ? 'Add to cart' : 'Out of stock'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;