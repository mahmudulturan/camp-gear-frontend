import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct, useGetAProductQuery } from '../../redux/features/productsApi';
import Loader from '../../components/shared/Loader/Loader';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from '../../components/ui/button';
import ProductImage from './components/ProductImage/ProductImage';
import toast from 'react-hot-toast';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hook';

const ProductDetailsPage: FC = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetAProductQuery(id as string);
    const { items } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()


    const isExist = items.find(item => item._id === id) || {
        quantity: 0
    };

    const handleAddToCart = () => {
        if (isExist?.quantity > (data?.data?.inventory?.quantity as number) - 1) {
            return toast.error("Stock quantity exceeded");
        }
        dispatch(addToCart(data?.data as IProduct));
        toast.success("Product added to cart")
    }
    if (isLoading) return <Loader />
    return (
        <div className='wrapper my-20'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
                <ProductImage image={data?.data.image || ''} />
                <div>
                    <div className='space-y-2 mb-10'>
                        <h1 className='text-3xl font-semibold'>{data?.data.title}</h1>
                        <p className='text-textGray max-w-xl'>{data?.data.description}</p>
                    </div>
                    <div className='space-y-3'>
                        <p><span className='font-medium text-lg'>Category:</span> <span className='text-textGray font-medium'>{data?.data.category}</span></p>
                        <p><span className='font-medium text-lg'>Price:</span> <span className='text-2xl font-bold'>{data?.data.price.amount}$</span></p>
                        <div className='flex items-center gap-1'><span className='font-medium text-lg'>Rating:</span> <span className='flex items-center gap-1'>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={data?.data.rating.rate || 5}
                                readOnly
                            />
                            <span className='text-sm'> ({data?.data.rating.count})</span></span></div>
                        <p><span className='font-medium text-lg'>In Stock:</span> <span className='text-textGray font-medium'>{data?.data.inventory.quantity}</span></p>
                        <p><span className='font-medium text-lg'>Availability:</span> <span className='text-textGray font-medium'>{data?.data.inventory.inStock ? 'In Stock' : 'Out of Stock'}</span></p>
                    </div>
                    <div className='my-6'>
                        <Button variant={"reverse"} disabled={!data?.data.inventory.inStock} onClick={handleAddToCart}>
                            {data?.data.inventory.inStock ? 'Add to cart' : 'Out of stock'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;