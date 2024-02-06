import Image from '~/assets';
import cl from './Header.module.scss';
import clsx from 'clsx';
import Persional from './Persional';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <Persional />

            <header className={clsx(cl.header, 'bg-repeat-x bg-scroll bg-left-bottom w-full')}>
                <div
                    className={clsx(
                        cl.header__container,
                        'flex justify-between items-center w-[978.4px] mx-auto h-full'
                    )}
                >
                    <div className='flex gap-9 font-bold mt-2'>
                        <div className={clsx(cl.header__logo)}>
                            <Link to={'/'}>
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