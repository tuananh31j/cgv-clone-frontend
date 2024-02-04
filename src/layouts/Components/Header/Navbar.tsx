import clsx from 'clsx';
import styles from './Header.module.scss';

const Navbar = () => {
    return (
        <div className={clsx(styles.header__nav, 'mt-7 font-bold')}>
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
    );
};

export default Navbar;
