import Image from '~/assets';
import cl from './Header.module.scss';
import clsx from 'clsx';
import Persional from './Persional';
import Navbar from './Navbar';
const Header = () => {
    return (
        <>
            <Persional />

            <header className={clsx(cl.header, 'bg-repeat-x bg-scroll bg-left-bottom')}>
                <div className={clsx(cl.header__container, 'flex gap-[202px] items-center w-[930px] mx-auto h-full')}>
                    <div className='flex'>
                        <div className={clsx(cl.header__logo)}>
                            <img src={Image.logo} alt='' />
                        </div>
                        <Navbar />
                    </div>
                    <div className={clsx(cl.header__search, 'flex items-center')}>
                        <div className={clsx(cl.header__search_left)}>
                            <a href=''>
                                <img src='https://www.cgv.vn/media/wysiwyg/2019/AUG/kenhcine.gif' alt='' />
                            </a>
                        </div>
                        <div className={clsx(cl.header__search_right)}>
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
