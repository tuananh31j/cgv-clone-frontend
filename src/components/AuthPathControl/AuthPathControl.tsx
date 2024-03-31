import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '~/store/store';
import { getCookie } from '~/utilities/cookie';

const AuthPathControl = ({ children }: { children: React.ReactNode }) => {
    useSelector((state: RootState) => state.auth.login.currentUser.id);
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = getCookie('refreshToken');
    if (!accessToken && !refreshToken) return <Navigate to={'/login'} />;

    return children;
};

export default AuthPathControl;
