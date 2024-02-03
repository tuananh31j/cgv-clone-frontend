import Image from '~/assets';
import cl from './Header.module.scss';
import clsx from 'clsx';
import PinkSwitch from '../../../components/PinkSwitch/PinkSwitch';
const Header = () => {
    return (
        <>
            <div className={clsx(cl.header__persional)}>
                <nav>
                    <ul className='flex justify-end gap-10 w-[930px] my-2 mx-auto uppercase text-sm  text-gray-500'>
                        <li>
                            <p>
                                <a href=''>Tin moi nhat & uu dai</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href=''>ve cua toi</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href=''>Dang nhap</a>/<a href=''>Dang ky</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <button
                                    className={clsx(
                                        cl.header__search__vn,
                                        'border py-[0.2px] px-2 rounded-s-md text-white'
                                    )}
                                >
                                    VN
                                </button>
                                <button
                                    className={clsx(
                                        cl.header__search__en,
                                        'border py-[0.2px] px-2 rounded-e-sm text-white'
                                    )}
                                >
                                    EN
                                </button>
                            </p>
                        </li>
                        <li>
                            <PinkSwitch />
                        </li>
                    </ul>
                </nav>
            </div>
            <header className={clsx(cl.header, 'bg-repeat-x bg-scroll bg-left-bottom')}>
                <div className={clsx(cl.header__container, 'flex gap-[202px] items-center w-[930px] mx-auto h-full')}>
                    <div className='flex'>
                        <div className={clsx(cl.header__logo)}>
                            <img src={Image.logo} alt='' />
                        </div>
                        <div className={clsx(cl.header__nav, 'mt-7 font-bold')}>
                            <nav>
                                <ul className={clsx('flex gap-4 uppercase')}>
                                    <li>
                                        <a href=''>phim</a>
                                    </li>
                                    <li>
                                        <a href=''>rap cgv</a>
                                    </li>
                                    <li>
                                        <a href=''>Thanh vien</a>
                                    </li>
                                    <li>
                                        <a href=''>Cultureplex</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
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
