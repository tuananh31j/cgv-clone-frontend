import MainLayout from '~/layouts/MainLayout';
import publicRoutes from './PublicRoutes';
import HomePage from '~/pages/Home/Home';
import NotFound from '~/pages/NotFound';
import authRoutes from './AuthRoutes';
import AdminLayout from '~/layouts/AdminLayout/AdminLayout';
import Dashbroad from '~/pages/Admin/Dashbroad';
import PrivateRoutes from './PrivateRoutes';
const AppRoutes = [
    {
        path: '',
        element: <MainLayout />,
        children: [{ index: true, element: <HomePage /> }, ...publicRoutes, ...authRoutes],
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        children: [{ index: true, element: <Dashbroad /> }, { path: 'movies' }, ...PrivateRoutes],
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default AppRoutes;
