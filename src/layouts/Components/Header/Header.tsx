import Image from '~/assets';
import cl from './Header.module.scss';
import clsx from 'clsx';
import Persional from './Persional';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import auth from '~/api/authApi';
import { ICustomer } from '~/types/Customer';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '~/store/store';
import { logoutAsyncThunk } from '~/store/Slices/AuthSlice';
import showMessage from '~/utilities/showMessage';
const Header = () => {
    const [currentUser, setCurrentUser] = useState<ICustomer>();
    const user = useSelector((state: RootState) => state.auth.login.currentUser);
    const dispatch = useAppDispatch();
    const handleLogout = async () => {
        try {
            await dispatch(logoutAsyncThunk());
            showMessage('Đã đăng xuất!', 'info');
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        (async () => {
            if (user.accessToken !== '') {
                try {
                    const { data } = await auth.getMe();
                    if (data) {
                        setCurrentUser(data);
                    }
                } catch (error) {
                    setCurrentUser(undefined);
                }
            } else {
                setCurrentUser(undefined);
            }
        })();
    }, [user]);

    return (
        <>
            <Persional currentUser={currentUser} onClick={handleLogout} />

            <header className={clsx(cl.header, 'w-full bg-scroll bg-left-bottom bg-repeat-x')}>
                <div
                    className={clsx(
                        cl.header__container,
                        'mx-auto flex h-full w-[978.4px] items-center justify-between'
                    )}
                >
                    <div className='mt-2 flex gap-9 font-bold'>
                        <div className={clsx(cl.header__logo)}>
                            <Link to={''}>
                                <img src={Image.logo} alt='' />
                            </Link>
                        </div>
                        <Navbar />
                    </div>
                    <div className={clsx(cl.header__search, 'flex items-center')}>
                        <div className={clsx(cl.header__search_left)}>
                            <a href=''>
                                <img src='https://www.cgv.vn/media/wysiwyg/2019/AUG/kenhcine.gif' alt='' />
                            </a>
                        </div>
                        <div className={clsx(cl.header__search_right, 'mb-7')}>
                            <a href=''>
                                <img src='https://www.cgv.vn/media/wysiwyg/news-offers/mua-ve_ngay.png' alt='' />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
