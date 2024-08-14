import { FC } from 'react';
import Banner from './components/Banner/Banner';
import FAQSection from './components/FAQSection/FAQSection';
import BestSelling from './components/BestSelling/BestSelling';
import Categories from './components/Categories/Categories';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import DiscountBanner from './components/DiscountBanner/DiscountBanner';

const HomePage: FC = () => {
    return (
        <div className='space-y-20 mb-20'>
            <Banner />
            <BestSelling />
            <Categories />
            <FeaturedProducts />
            <DiscountBanner />
            <FAQSection />
        </div>
    );
};

export default HomePage;