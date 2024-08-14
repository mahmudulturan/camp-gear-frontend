import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import ProductsPage from '../pages/products/ProductsPage';
import ManageProductsPage from '../pages/manage-products/ManageProductsPage';

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/products',
                element: <ProductsPage />
            },
            {
                path: '/manage-products',
                element: <ManageProductsPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
        ]
    }
]);
export default MainRoutes;