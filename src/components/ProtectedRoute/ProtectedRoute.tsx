import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '~/store/store';
import { getCookie } from '~/utilities/cookie';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = getCookie('refreshToken');
    const token = useSelector((state: RootState) => state.auth.login.currentUser.id);

    if (accessToken && refreshToken) {
        return <Navigate to='/not-found' replace />;
    }

    return children;
};

export default ProtectedRoute;
