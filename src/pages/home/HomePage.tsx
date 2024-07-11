import { FC } from 'react';
import Banner from '../../components/pages/Home/Banner/Banner';
import FAQSection from '../../components/pages/Home/FAQSection/FAQSection';

const HomePage: FC = () => {
    return (
        <div className='space-y-20 mb-20'>
            <Banner />
            <FAQSection />
        </div>
    );
};

export default HomePage;