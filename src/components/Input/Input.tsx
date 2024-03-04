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
                <label htmlFor={htmlFor} className='text-black font-semibold'>
                    {title}
                    {require && <span className='text-[#e41a0f]'>*</span>}
                </label>
                <input
                    {...passProps}
                    ref={ref}
                    placeholder={placeholder}
                    type={type}
                    className='border border-gray-500 rounded-[3px] focus:border-[#e41a0f] p-2 w-full'
                />
            </div>
        );
    }
);

export default Input;
