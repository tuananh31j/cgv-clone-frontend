import MainLayout from '~/layouts/MainLayout';
import CinemasList from '~/pages/CinemasList';
import HomePage from '~/pages/Home';
import Login from '~/pages/Auth/Login';
import MovieDetails from '~/pages/MovieDetails';
import MoviesComingSoon from '~/pages/MoviesComingSoon';
import MoviesNowShowing from '~/pages/MoviesNowShowing';
import NotFound from '~/pages/NotFound';
import Register from '~/pages/Auth/Register';
import Auth from '~/pages/Auth';
const PublicRouter = [
    {
        path: '',
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'movies/now-showing', element: <MoviesNowShowing /> },
            { path: 'movies/coming-soon', element: <MoviesComingSoon /> },
            { path: 'movies/:id', element: <MovieDetails /> },
            { path: 'cinemas-list', element: <CinemasList /> },
            {
                path: '',
                element: <Auth />,
                children: [
                    { index: true, element: <Login /> },
                    { path: 'login', element: <Login /> },
                    { path: 'register', element: <Register /> },
                ],
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default PublicRouter;
