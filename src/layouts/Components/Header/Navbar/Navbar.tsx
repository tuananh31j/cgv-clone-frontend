import clsx from 'clsx';
import styles from '../Header.module.scss';
import NavItem from './NavItem';

const MENU_ITEMS = [
    {
        name: 'phim',
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
        children: [
            { name: 'Tất cả các rạp', path: '/cinemas-list' },
            { name: 'Rạp đặc biệt', path: '/' },
            { name: 'Rạp 3d', path: '/' },
        ],
    },
    {
        name: 'Thành viên',
        children: [
            { name: 'Tài khoản cgv', path: '/' },
            { name: 'Quyền lợi', path: '/' },
        ],
    },
    {
        name: 'Cultureplex',
        children: [
            { name: 'Quầy Online', path: '/' },
            { name: 'Thuê Rạp & Vé Nhóm', path: '/' },
            { name: 'E-CGV', path: '/' },
            { name: 'CGV EGift', path: '/' },
            { name: 'CGV Rules', path: '/' },
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
                            <NavItem menuParentName={item.name} menuChildren={item.children} />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
