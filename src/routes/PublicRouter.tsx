import MainLayout from '~/layouts/MainLayout';
import CinemasList from '~/pages/CinemasList';
import HomePage from '~/pages/Home';
import MoviesComingSoon from '~/pages/MoviesComingSoon';
import MoviesNowShowing from '~/pages/MoviesNowShowing';
import NotFound from '~/pages/NotFound';
const PublicRouter = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/movies/now-showing', element: <MoviesNowShowing /> },
            { path: '/movies/coming-soon', element: <MoviesComingSoon /> },
            { path: '/cinemas-list', element: <CinemasList /> },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default PublicRouter;
