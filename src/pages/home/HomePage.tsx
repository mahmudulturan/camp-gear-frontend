import { FC } from 'react';
import Banner from '../../components/pages/Home/Banner/Banner';
import FAQSection from '../../components/pages/Home/FAQSection/FAQSection';
import BestSelling from '../../components/pages/Home/BestSelling/BestSelling';

const HomePage: FC = () => {
    return (
        <div className='space-y-20 mb-20'>
            <Banner />
            <BestSelling />
            <FAQSection />
        </div>
    );
};

export default HomePage;