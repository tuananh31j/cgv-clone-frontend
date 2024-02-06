import clsx from 'clsx';
import styles from './Button.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { ReactElement } from 'react';

const Button = ({
    to,
    href,
    children,
    classNames,
    primary,
    inLine,
    small,
    large,
    iconDefault,
    ...passProps
}: {
    to?: string;
    href?: string;
    children: string | React.ReactNode;
    classNames?: string;
    primary?: boolean;
    secondary?: boolean;
    inLine?: boolean;
    small?: boolean;
    large?: boolean;
    iconDefault?: boolean;
}) => {
    return (
        <>
            {href && (
                <a
                    {...passProps}
                    className={clsx(
                        {
                            'bg-[#e71a0f]': primary,
                            'p-[7px] max-w-[120px] px-2': large,
                            'p-[4px] px-[6px] max-h-8 box-border text-sm': small,
                        },
                        '  rounded-md  z-50 ',
                        `${classNames}`
                    )}
                    href={href}
                >
                    <span
                        className={clsx(
                            {
                                'border border-[#f07469] border-solid rounded-md p-[4.5px]': inLine && large,
                                'border border-[#f07469] border-solid rounded-md p-[1px]': inLine,
                                'ps-8': iconDefault,
                            },
                            'relative   box-content text-white '
                        )}
                    >
                        {iconDefault && <span className={clsx(styles.card_purchare_icon)}></span>}
                        {children}
                    </span>
                </a>
            )}

            {to && (
                <Link
                    {...passProps}
                    className={clsx(
                        { 'bg-[#e71a0f]': primary, 'p-[6px] px-2': large, 'p-[3px] max-h-8 box-border text-sm': small },
                        '  rounded-md  z-50 ',
                        `${classNames}`
                    )}
                    to={to}
                >
                    <span
                        className={clsx(
                            {
                                'border border-[#f07469] border-solid rounded-md p-[3px]': inLine && large,
                                'border border-[#f07469] border-solid rounded-md p-[1px]': inLine,
                                'ps-8': iconDefault,
                            },
                            'relative   box-content text-white '
                        )}
                    >
                        {iconDefault && <span className={clsx(styles.card_purchare_iconDefault)}></span>}
                        {children}
                    </span>
                </Link>
            )}

            {!to && !href && (
                <button
                    {...passProps}
                    className={clsx(
                        { 'bg-[#e71a0f]': primary, 'p-[6px] px-2': large, 'p-[3px] max-h-8 box-border text-sm': small },
                        '  rounded-md  z-50 ',
                        `${classNames}`
                    )}
                >
                    <span
                        className={clsx(
                            {
                                'border border-[#f07469] border-solid rounded-md p-[3px]': inLine && large,
                                'border border-[#f07469] border-solid rounded-md p-[1px]': inLine,
                                'ps-8': iconDefault,
                            },
                            'relative   box-content text-white '
                        )}
                    >
                        {iconDefault && <span className={clsx(styles.card_purchare_iconDefault)}></span>}
                        {children}
                    </span>
                </button>
            )}
        </>
    );
};

export default Button;
