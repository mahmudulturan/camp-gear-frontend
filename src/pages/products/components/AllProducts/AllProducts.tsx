import { FC } from 'react';
import { IProduct } from '../../../../redux/features/productsApi';
import ProductCard from '../../../../components/shared/ProductsCard/ProductCard';



const AllProducts: FC<{ products: IProduct[] | undefined }> = ({ products }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            {
                products?.map((product: IProduct) => (<ProductCard product={product} />))
            }
        </div>
    );
};

export default AllProducts;