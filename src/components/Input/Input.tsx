import { forwardRef } from 'react';
interface IInputProps extends React.HTMLProps<HTMLInputElement> {
    type: string;
    title: string;
    placeholder?: string;
    require?: boolean;
    flexBox?: boolean;
}
const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({ type, htmlFor, title, placeholder, require, flexBox, ...passProps }, ref) => {
        return (
            <div className={`mt-3 ${flexBox && 'flex items-center gap-2'}`}>
                <label htmlFor={htmlFor} className='font-semibold text-black'>
                    {title}
                    {require && <span className='text-[#e41a0f]'>*</span>}
                </label>
                <input
                    {...passProps}
                    ref={ref}
                    placeholder={placeholder}
                    type={type}
                    className='w-full rounded-[3px] border border-gray-500 p-2 focus:border-[#e41a0f]'
                />
            </div>
        );
    }
);

export default Input;
