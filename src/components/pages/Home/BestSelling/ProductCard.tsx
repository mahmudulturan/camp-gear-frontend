import { FC } from 'react';
import { IProduct } from '../../../../redux/features/productsApi';

import image1 from '../../../../assets/mock-item-images/produc5.webp';
import image2 from '../../../../assets/mock-item-images/product12_5ad78891-a8aa-4fbf-868e-91c6a471d073.webp';
import image3 from '../../../../assets/mock-item-images/product14.1.webp';
import image4 from '../../../../assets/mock-item-images/product15.webp';

const images = [image1, image2, image3, image4];

const ProductCard: FC<{product: IProduct}> = ({product}) => {
    return (
        <div className=''>
            <div className='bg-[#EFEDEE] relative overflow-hidden group cursor-pointer'>
                <img src={images[0]} alt={product?.name} className='object-cover' />
                <button className='w-full text-center hover:text-primary bg-white py-2 font-semibold absolute bottom-0 translate-y-full group-hover:translate-y-0 origin-bottom transition-all duration-300'>Add to cart</button>
            </div>
            <div className='mt-4'>
                <h6 className='font-medium cursor-pointer hover:text-primary duration-300'>{product?.name}</h6>
                <p className='font-semibold text-primary'>$45{product?.price?.amount}</p>
            </div>
        </div>
    );
};

export default ProductCard;