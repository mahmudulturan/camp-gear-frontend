import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetAProductQuery } from '../../redux/features/productsApi';
import Loader from '../../components/shared/Loader/Loader';

const ProductDetailsPage: FC = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetAProductQuery(id as string);

    if (isLoading) return <Loader />
    return (
        <div className='wrapper mb-20'>
            {data?.data.title}
        </div>
    );
};

export default ProductDetailsPage;