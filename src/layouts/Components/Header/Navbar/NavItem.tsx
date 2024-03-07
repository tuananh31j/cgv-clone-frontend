import clsx from 'clsx';
import styles from '../Header.module.scss';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { Link } from 'react-router-dom';
const NavItem = ({
    menuParentName,
    menuChildren = null,
}: {
    menuParentName: string;
    menuChildren?: { name: string; path: string }[] | null;
}) => {
    return (
        <>
            {menuChildren && (
                <NavigationMenu.Root>
                    <NavigationMenu.List>
                        <NavigationMenu.Item className='relative'>
                            <NavigationMenu.Trigger className='cursor-pointer hover:shadow-black hover:shadow-sm font-bold'>
                                {menuParentName}
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className='absolute '>
                                <div className={clsx(styles.bg_menu_hover, 'p-1  w-full')}>
                                    <ul className='p-2  text-white border-2 w-[200px]  border-solid border-gray-500 box-content '>
                                        {menuChildren.map((item, i) => (
                                            <li className='hover:text-[#e71a0f] font-bold' key={i}>
                                                <Link to={item.path}>{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>
                </NavigationMenu.Root>
            )}

            {!menuChildren && <a className='font-bold'>{menuParentName}</a>}
        </>
    );
};

export default NavItem;
