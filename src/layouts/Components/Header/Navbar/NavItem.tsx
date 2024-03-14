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
                            <NavigationMenu.Trigger className='cursor-pointer font-bold hover:shadow-sm hover:shadow-black'>
                                {menuParentName}
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className='absolute '>
                                <div className={clsx(styles.bg_menu_hover, 'w-full  p-1')}>
                                    <ul className='box-content  w-[200px] border-2 border-solid  border-gray-500 p-2 text-white '>
                                        {menuChildren.map((item, i) => (
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

            {!menuChildren && <a className='font-bold'>{menuParentName}</a>}
        </>
    );
};

export default NavItem;
