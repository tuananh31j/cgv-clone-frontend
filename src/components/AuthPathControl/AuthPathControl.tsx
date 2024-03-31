import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '~/store/store';
import Loading from '../Loading';

const AuthPathControl = ({ children }: { children: React.ReactNode }) => {
    const { loading, login } = useSelector((state: RootState) => state.auth);
    if (loading) return <Loading />;
    if (!login.currentUser.id && !loading) return <Navigate to={'/login'} />;

    return children;
};

export default AuthPathControl;
