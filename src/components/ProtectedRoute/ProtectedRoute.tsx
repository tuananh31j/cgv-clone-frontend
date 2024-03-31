import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '~/store/store';
import Loading from '../Loading';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { loading, login } = useSelector((state: RootState) => state.auth);
    if (loading) return <Loading />;
    if (login.currentUser.id) return <Navigate to='/not-found' replace />;

    return children;
};

export default ProtectedRoute;
