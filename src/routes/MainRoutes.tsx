import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    }
]);
export default MainRoutes;