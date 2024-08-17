import { FC } from 'react';
import SectionHeader from '../../../../components/ui/section-header';
import { IProduct, useGetProductsQuery } from '../../../../redux/features/productsApi';
import ProductCard from '../../../../components/shared/ProductsCard/ProductCard';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import './featured-products.css';

const FeaturedProducts: FC = () => {
    const { data, isLoading } = useGetProductsQuery(undefined);

    if (isLoading) return <div>Loading...</div>;
    return (
        <div className='wrapper'>
            <div className='my-10'>
                <SectionHeader title="Featured Products" />
                <p className='text-textGray text-center my-4'>Exclusive Selection of Our Best Camping Gear</p>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={24}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                loop={true}
                modules={[Autoplay, Pagination]}
            >
                {
                    data?.data?.products.slice(0, 8).map((product: IProduct) => (<SwiperSlide key={product?._id} className='mb-10'><ProductCard product={product} /></SwiperSlide>))
                }

            </Swiper>
        </div>
    );
};

export default FeaturedProducts;