import clsx from 'clsx';
import styles from '../Header.module.scss';
import NavItem from './NavItem';

const MENU_ITEMS = [
    {
        name: 'Phim',
        children: [
            {
                name: 'Phim đang chiếu',
                path: '/movies/now-showing',
            },
            { name: 'Phim sắp chiếu', path: '/movies/coming-soon' },
        ],
    },
    {
        name: 'Rạp cgv',
        path: 'cinemas',
    },
    {
        name: 'Thành viên',
        children: [
            { name: 'Tài khoản cgv', path: '/account' },
            { name: 'Quyền lợi', path: '/comming-soon' },
        ],
    },
    {
        name: 'Cultureplex',
        children: [
            { name: 'Quầy Online', path: '/comming-soon' },
            { name: 'Thuê Rạp & Vé Nhóm', path: '/comming-soon' },
            { name: 'E-CGV', path: '/comming-soon' },
            { name: 'CGV EGift', path: '/comming-soon' },
            { name: 'CGV Rules', path: '/policy' },
        ],
    },
];

const Navbar = () => {
    return (
        <div className={clsx(styles.header__nav, 'mt-7 font-bold')}>
            <nav>
                <ul className={clsx('flex gap-8 uppercase')}>
                    {MENU_ITEMS.map((item, i) => (
                        <li key={i}>
                            <NavItem menu={item} />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
