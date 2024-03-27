import useDocumentTitle from '~/hooks/useDocumentTitle';
import Header from '~/layouts/Components/Header';

const NotFound = () => {
    useDocumentTitle('Not found!');

    return (
        <>
            <Header />
            <div className='mx-auto flex flex-col items-center justify-center text-center text-2xl font-bold'>
                Not found!
            </div>
        </>
    );
};

export default NotFound;
