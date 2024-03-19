import MainLayout from '~/layouts/MainLayout';
import publicRoutes from './PublicRoutes';
import HomePage from '~/pages/Home/Home';
import NotFound from '~/pages/NotFound';
import authRoutes from './AuthRoutes';
const AppRoutes = [
    {
        path: '',
        element: <MainLayout />,
        children: [{ index: true, element: <HomePage /> }, ...publicRoutes, ...authRoutes],
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default AppRoutes;
