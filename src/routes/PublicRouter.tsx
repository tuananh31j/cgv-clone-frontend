import MainLayout from '~/layouts/MainLayout';
import HomePage from '~/pages/Home';
import NotFound from '~/pages/NotFound';
const PublicRouter = [
    {
        path: '/',
        element: <MainLayout />,
        children: [{ index: true, element: <HomePage /> }],
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default PublicRouter;
