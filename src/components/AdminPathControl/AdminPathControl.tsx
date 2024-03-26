import { useSelector } from 'react-redux';
import NotFound from '~/pages/NotFound';
import { RootState } from '~/store/store';
import AuthPathControl from '../AuthPathControl';

const AdminPathControl = ({ children }: { children: React.ReactNode }) => {
    const me = useSelector((state: RootState) => state.auth.login.currentUser);
    if (me && me.role !== 'admin') return <NotFound />;

    return <AuthPathControl>{children}</AuthPathControl>;
};

export default AdminPathControl;
