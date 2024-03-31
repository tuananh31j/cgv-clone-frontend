import CinemasList from '~/pages/Cinemas';
import Login from '~/pages/Auth/Login';
import MovieDetails from '~/pages/MovieDetails';
import MoviesComingSoon from '~/pages/MoviesComingSoon';
import MoviesNowShowing from '~/pages/MoviesNowShowing';
import Register from '~/pages/Auth/Register';
import Auth from '~/pages/Auth';
import ProtectedRoute from '~/components/ProtectedRoute';
import Policy from '~/pages/Policy';
import Cinemas from '~/pages/Cinemas';
const PublicRoutes = [
    { path: 'movies/now-showing', element: <MoviesNowShowing /> },
    { path: 'movies/coming-soon', element: <MoviesComingSoon /> },
    { path: 'movies/:id', element: <MovieDetails /> },
    { path: 'cinemas', element: <CinemasList /> },
    { path: 'policy', element: <Policy /> },
    { path: 'cinemas', element: <Cinemas /> },
    {
        path: '',
        element: (
            <ProtectedRoute>
                <Auth />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Login /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
        ],
    },
];

export default PublicRoutes;
