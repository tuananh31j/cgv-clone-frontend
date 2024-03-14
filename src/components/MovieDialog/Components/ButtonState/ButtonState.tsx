import clsx from 'clsx';
import { forwardRef } from 'react';
interface IButtonStateProps extends React.HTMLProps<HTMLButtonElement> {
    children: string | React.ReactNode;
    className?: string;
    status?: string | boolean;
    type?: 'normal' | 'vip' | 'double' | 'reservedSeat';
}
const ButtonState = forwardRef<HTMLButtonElement, IButtonStateProps>(
    ({ children, className, status, type, ...passProps }, ref) => {
        const Comp: React.ElementType = 'button';

        if (type === 'reservedSeat') {
            children = 'X';
        }
        return (
            <>
                <Comp
                    data-status={status ? 'active' : ''}
                    data-type={type ? type : ''}
                    ref={ref}
                    {...passProps}
                    className={clsx(`${className}`)}
                >
                    {children}
                </Comp>
            </>
        );
    }
);

export default ButtonState;
