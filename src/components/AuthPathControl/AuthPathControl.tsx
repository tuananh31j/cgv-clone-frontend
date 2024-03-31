import { Navigate } from 'react-router-dom';
import { getCookie } from '~/utilities/cookie';

const AuthPathControl = ({ children }: { children: React.ReactNode }) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = getCookie('refreshToken');
    if (!accessToken && refreshToken) return <Navigate to={'/login'} />;

    return children;
};

export default AuthPathControl;
