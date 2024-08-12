import { FC } from 'react';
import Banner from '../../components/pages/Home/Banner/Banner';
import FAQSection from '../../components/pages/Home/FAQSection/FAQSection';
import BestSelling from '../../components/pages/Home/BestSelling/BestSelling';
import Categories from '../../components/pages/Home/Categories/Categories';
import FeaturedProducts from '../../components/pages/Home/FeaturedProducts/FeaturedProducts';

const HomePage: FC = () => {
    return (
        <div className='space-y-20 mb-20'>
            <Banner />
            <BestSelling />
            <Categories />
            <FeaturedProducts />
            <FAQSection />
        </div>
    );
};

export default HomePage;