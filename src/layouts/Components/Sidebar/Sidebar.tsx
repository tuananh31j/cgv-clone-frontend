import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const menus = [
    {
        path: '',
        name: 'Thông kê',
    },
    {
        path: null,
        name: 'Quản lý xuất chiều',
        children: [
            { path: 'movies/now-showing', name: 'Phim đang chiếu' },
            { path: 'movies/comming-soon', name: 'Phim sắp chiếu' },
        ],
    },
    { path: 'movies', name: ' Quản lý phim' },
    { path: 'orders', name: ' Quản lý vé' },
    { path: 'banner', name: ' Quản lý banner' },
    { path: null, name: 'Rạp phim', children: 'callAPI' },
];

const Sidebar = () => {
    const [isNav, setIsNav] = useState<boolean>(true);
    const handleNav = () => {
        setIsNav(!isNav);
    };
    return (
        <>
            <div
                className={`fixed h-full max-h-[100vh] w-full max-w-[20vw]  bg-red-400 transition-all duration-200 ease-in-out ${isNav ? '' : '-translate-x-[100%]'}`}
            >
                <p className='py-2 text-center text-2xl font-extrabold uppercase'>admin</p>
                <div className='flex flex-col gap-2 p-7 ps-3 font-semibold'>
                    <Link to='/' className='rounded-md border-transparent p-1 px-2'>
                        Trang chủ
                    </Link>
                    <NavLink
                        to={''}
                        end
                        className={({ isActive }) => {
                            const classAcitve = isActive
                                ? 'translate-x-4 bg-red-900 text-white transition-transform duration-75 ease-in'
                                : '';

                            return `${classAcitve}  rounded-md border-transparent p-1 px-2`;
                        }}
                    >
                        Thống kê
                    </NavLink>
                    <NavLink
                        to={'movies'}
                        className={({ isActive }) => {
                            const classAcitve = isActive
                                ? 'translate-x-4 bg-red-900 text-white transition-transform duration-75 ease-in'
                                : '';

                            return `${classAcitve}  rounded-md border-transparent p-1 px-2`;
                        }}
                    >
                        Quản lý phim
                    </NavLink>
                </div>
                <button
                    onClick={handleNav}
                    className={`absolute -right-4 top-[10vh] text-[19px] font-extrabold ${isNav ? '' : 'rotate-180'} transition-all duration-200 ease-in-out`}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </div>
            <div className={`-z-50 h-full max-h-[100vh] w-full max-w-[20vw] bg-red-400 ${isNav ? '' : 'hidden'}`}></div>
        </>
    );
};

export default Sidebar;
