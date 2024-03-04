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
                            'bg-[#e71a0f] rounded-md': primary,
                            'p-1 rounded-md': inLine || large,
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
                                    'border text-white border-[#f07469] border-solid rounded-md': inLine,
                                    'p-[4px] max-w-[120px] px-1': large,
                                    'p-[4px] px-[6px] max-w-20 box-border text-sm ': small,
                                    'bg-[#e71a0f]': primary,
                                },
                                'flex gap-[1px] items-center'
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
