import clsx from 'clsx';
import styles from './Button.module.scss';
import { Link, LinkProps, To } from 'react-router-dom';
import { forwardRef } from 'react';
interface IButtonProps extends React.HTMLProps<HTMLButtonElement | HTMLAnchorElement> {
    to?: string;
    href?: string;
    children: string | React.ReactNode;
    customChildren?: boolean;
    className?: string;
    state?: string | boolean;
    type?: 'normal' | 'vip' | 'double' | 'reservedSeat';
    primary?: boolean;
    secondary?: boolean;
    inLine?: boolean;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    iconDefault?: boolean;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
}
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement | LinkProps, IButtonProps>(
    (
        {
            to,
            href,
            children,
            customChildren,
            className,
            state,
            type,
            primary,
            inLine,
            small,
            large,
            iconDefault,
            iconLeft,
            iconRight,
            ...passProps
        },
        ref
    ) => {
        let Comp: React.ElementType = 'button';
        const props: { to?: To; href?: string } = {};
        if (!!to && !href && to !== '') {
            Comp = Link;
            props.to = to;
            delete props.href;
        } else if (!to && !!href) {
            Comp = 'a';
            delete props.to;
            props.href = href;
        }

        if (type === 'reservedSeat') {
            children = 'X';
        }
        return (
            <>
                <Comp
                    data-state={state ? 'active' : ''}
                    data-type={type ? type : ''}
                    ref={ref}
                    {...passProps}
                    {...props}
                    className={clsx(
                        {
                            'rounded-md bg-[#e71a0f]': primary,
                            'rounded-md p-1': inLine || large,
                            'rounded-md': small,
                        },
                        '',
                        `${className}`
                    )}
                >
                    {customChildren && children}
                    {!customChildren && (
                        <span
                            className={clsx(
                                {
                                    'rounded-md border border-solid border-[#f07469] text-white': inLine,
                                    'max-w-[120px] p-[4px] px-1': large,
                                    'box-border max-w-20 p-[4px] px-[6px] text-sm ': small,
                                    'bg-[#e71a0f]': primary,
                                },
                                'flex items-center gap-[1px]'
                            )}
                        >
                            {iconLeft && <span>{iconLeft}</span>}
                            <span>{children}</span>
                            {iconRight && <span>{iconRight}</span>}
                        </span>
                    )}
                </Comp>
            </>
        );
    }
);

export default Button;
