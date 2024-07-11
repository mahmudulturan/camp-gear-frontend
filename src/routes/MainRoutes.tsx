import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home/HomePage';
import App from '../App';

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
            }
        ]
    }
]);
export default MainRoutes;