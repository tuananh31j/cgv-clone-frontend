import clsx from 'clsx';
import styles from '../Header.module.scss';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { Link } from 'react-router-dom';
const NavItem = ({ menu }: { menu: { name: string; path?: string; children?: { name: string; path: string }[] } }) => {
    return (
        <>
            {menu && menu.children && (
                <NavigationMenu.Root className='z-50'>
                    <NavigationMenu.List>
                        <NavigationMenu.Item className='relative'>
                            <NavigationMenu.Trigger className='cursor-pointer font-bold hover:shadow-sm hover:shadow-black'>
                                {menu.name}
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className='absolute z-50'>
                                <div className={clsx(styles.bg_menu_hover, 'w-full  p-1')}>
                                    <ul className='box-content  w-[200px] border-2 border-solid  border-gray-500 p-2 text-white '>
                                        {menu.children.map((item, i) => (
                                            <li className='font-bold hover:text-[#e71a0f]' key={i}>
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

            {!menu.children && menu.path && (
                <Link to={menu.path} className='cursor-pointer font-bold hover:shadow-sm hover:shadow-black'>
                    {menu.name}
                </Link>
            )}
        </>
    );
};

export default NavItem;
