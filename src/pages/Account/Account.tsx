import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import useDocumentTitle from '~/hooks/useDocumentTitle';

const Account = () => {
    useDocumentTitle('Tài khoản');
    return (
        <div className='container-box relative flex  gap-5 py-4'>
            <Sidebar />
            <div className='w-full '>
                <Outlet />
            </div>
        </div>
    );
};

export default Account;
