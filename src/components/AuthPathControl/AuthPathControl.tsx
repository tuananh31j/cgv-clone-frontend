import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '~/store/store';

const AuthPathControl = ({ children }: { children: React.ReactNode }) => {
    const token = useSelector((state: RootState) => state.auth.login.currentUser.id);
    if (!token) return <Navigate to={'/login'} />;

    return children;
};

export default AuthPathControl;
