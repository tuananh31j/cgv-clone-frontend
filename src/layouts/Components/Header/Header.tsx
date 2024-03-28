import Image from '~/assets';
import cl from './Header.module.scss';
import clsx from 'clsx';
import Persional from './Persional';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '~/store/store';
import { logoutAsyncThunk } from '~/store/Slices/AuthSlice';
import showMessage from '~/utilities/showMessage';
import { useCookies } from 'react-cookie';
const Header = () => {
    const [_, __, removeRefreshToken] = useCookies(['refreshToken']);

    const user = useSelector((state: RootState) => state.auth.login.currentUser);
    const dispatch = useAppDispatch();
    const handleLogout = async () => {
        try {
            await dispatch(logoutAsyncThunk())
                .unwrap()
                .then(() => removeRefreshToken('refreshToken'));
            showMessage('Đã đăng xuất!', 'info');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Persional currentUser={user} onClick={handleLogout} />

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
