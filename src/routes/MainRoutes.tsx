import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import ProductsPage from '../pages/products/ProductsPage';
import ManageProductsPage from '../pages/manage-products/ManageProductsPage';
import ProductDetailsPage from '../pages/product-details/ProductDetailsPage';
import CartPage from '../pages/cart/CartPage';
import CheckoutPage from '../pages/checkout/CheckoutPage';
import SuccessPage from '../pages/success/SuccessPage';

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
            {
                path: '/products/:id',
                element: <ProductDetailsPage />
            },
            {
                path: '/cart',
                element: <CartPage />
            },
            {
                path: '/checkout',
                element: <CheckoutPage />
            },
            {
                path: '/order-success',
                element: <SuccessPage />
            }
        ]
    }
]);
export default MainRoutes;