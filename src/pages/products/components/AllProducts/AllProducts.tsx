import { FC } from 'react';
import { IProduct } from '../../../../redux/features/productsApi';
import ProductCard from '../../../../components/shared/ProductsCard/ProductCard';



const AllProducts: FC<{ products: IProduct[] | undefined }> = ({ products }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            {
                products?.slice(0, 8)?.map((product: IProduct) => (<ProductCard key={product._id} product={product} />))
            }
        </div>
    );
};

export default AllProducts;