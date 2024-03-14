import { toast } from 'react-toastify';

const showMessage = (message: string, type: 'warning' | 'error' | 'success' | 'info') => {
    toast[type](message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
    });
};

export default showMessage;
