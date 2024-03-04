import { FieldError } from 'react-hook-form';

const ShowValitaion = ({ errorField }: { errorField: FieldError | undefined }) => {
    return (
        <div className='text-red-600 h-4'>
            <span>{errorField && errorField.message}</span>
        </div>
    );
};

export default ShowValitaion;
