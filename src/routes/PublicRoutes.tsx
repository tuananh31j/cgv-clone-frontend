import CinemasList from '~/pages/CinemasList';
import Login from '~/pages/Auth/Login';
import MovieDetails from '~/pages/MovieDetails';
import MoviesComingSoon from '~/pages/MoviesComingSoon';
import MoviesNowShowing from '~/pages/MoviesNowShowing';
import Register from '~/pages/Auth/Register';
import Auth from '~/pages/Auth';
const PublicRoutes = [
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
];

export default PublicRoutes;
