import useDocumentTitle from '~/hooks/useDocumentTitle';

const Policy = () => {
    useDocumentTitle('Chính sách');
    return (
        <div className='container-box'>
            <div>
                <h1 className='my-10 text-center text-[30px] font-bold italic'>Những quy định tại rạp CGV</h1>
            </div>
        </div>
    );
};

export default Policy;
