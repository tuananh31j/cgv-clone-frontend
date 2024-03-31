import { Navigate } from 'react-router-dom';
import { getCookie } from '~/utilities/cookie';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = getCookie('refreshToken');
    if (accessToken && refreshToken) {
        return <Navigate to='/not-found' replace />;
    }

    return children;
};

export default ProtectedRoute;
