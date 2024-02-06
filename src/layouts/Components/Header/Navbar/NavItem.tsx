import clsx from 'clsx';
import styles from '../Header.module.scss';
import * as HoverCard from '@radix-ui/react-hover-card';
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
                <HoverCard.Root>
                    <HoverCard.Trigger asChild>
                        <p className='cursor-pointer hover:shadow-black hover:shadow-sm font-bold'>{menuParentName}</p>
                    </HoverCard.Trigger>
                    <HoverCard.Portal>
                        <HoverCard.Content sideOffset={5}>
                            <div className={clsx(styles.bg_menu_hover, 'p-1')}>
                                <ul className='p-2 text-white border-2 border-solid border-gray-500 box-content'>
                                    {menuChildren.map((item, i) => (
                                        <li className='hover:text-[#e71a0f] font-bold' key={i}>
                                            <Link to={item.path}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </HoverCard.Content>
                    </HoverCard.Portal>
                </HoverCard.Root>
            )}

            {!menuParentName && <a className='font-bold'>{menuParentName}</a>}
        </>
    );
};

export default NavItem;
