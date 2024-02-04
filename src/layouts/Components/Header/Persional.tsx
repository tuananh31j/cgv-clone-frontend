import clsx from 'clsx';
import styles from './Header.module.scss';
import PinkSwitch from '~/components/PinkSwitch/PinkSwitch';

const Persional = () => {
    return (
        <div className={clsx(styles.header__persional)}>
            <nav>
                <ul className='flex justify-end gap-10 w-[930px] my-2 mx-auto uppercase text-sm  text-gray-500'>
                    <li>
                        <p>
                            <a href=''>Tin mới & Ưu đãi</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href=''>Vé của tôi</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href=''>Đăng nhập</a>/<a href=''>Đăng ký</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <button
                                className={clsx(
                                    styles.header__search__vn,
                                    'border py-[0.2px] px-2 rounded-s-md text-white'
                                )}
                            >
                                VN
                            </button>
                            <button
                                className={clsx(
                                    styles.header__search__en,
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
    );
};

export default Persional;
