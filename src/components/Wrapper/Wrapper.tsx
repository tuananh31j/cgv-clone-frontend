interface IContainerBoxProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}
const Wrapper: React.FC<IContainerBoxProps> = ({ children, className, title }) => {
    return (
        <>
            <div className={`my-4 w-full border-b-2 border-white border-opacity-15  pb-4 ${className}`}>
                <div className='my-2 text-xl text-[#717171]'>
                    <h1>{title}</h1>
                </div>
                {children}
            </div>
        </>
    );
};

export default Wrapper;
