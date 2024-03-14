import clsx from 'clsx';
import styles from './Breadcrumbs.module.scss';

import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Breadcrumbs = () => {
    const location = useLocation();
    let currentLink = '';
    const crumbs = location.pathname
        .split('/')
        .filter((crumb) => crumb !== '')
        .map((crumb, index, arr) => {
            currentLink += `/${crumb}`;
            // const lastIndex = arr.length - 1;
            return (
                <li key={index} className='text-gray-500'>
                    {crumb === 'movies' ? (
                        'Phim'
                    ) : (
                        <NavLink
                            className={({ isActive }) =>
                                clsx(
                                    {
                                        'font-semibold text-black underline': isActive,
                                    },
                                    ''
                                )
                            }
                            to={currentLink}
                        >
                            {crumb === 'now-showing' && 'Phim đang chiếu'}
                            {crumb === 'coming-soon' && 'Phim sắp chiếu'}
                        </NavLink>
                    )}
                </li>
            );
        });

    return (
        <div className='border-b-[2px] border-gray-300 bg-gray-200'>
            <ol className={clsx(styles.breadcrumbs_line, 'mx-auto max-w-[978.4px] py-1 ')}>
                <li>
                    <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faHouse} />
                    </NavLink>
                </li>
                {crumbs}
            </ol>
        </div>
    );
};

export default Breadcrumbs;
