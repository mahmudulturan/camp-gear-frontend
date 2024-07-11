import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home/HomePage';
import App from '../App';
import AboutPage from '../pages/about/AboutPage';

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
                element: <App />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
        ]
    }
]);
export default MainRoutes;