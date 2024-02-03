import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { pinkMode } from '~/store/Slices/Theme.slice';
const usePinkTheme = () => {
    const [pinkTheme, setPinkTheme] = useLocalStorage('pink-theme', false);

    const dispatch = useDispatch();

    const addClass = (bodyElement: DOMTokenList, className: string) => {
        bodyElement.add(className);
        dispatch(pinkMode(true));
    };
    const removeClass = (bodyElement: DOMTokenList, className: string) => {
        bodyElement.remove(className);
        dispatch(pinkMode(false));
    };

    useEffect(() => {
        const bodyElement = window.document.body.classList;
        const className = 'pink__theme';
        pinkTheme ? addClass(bodyElement, className) : removeClass(bodyElement, className);
    }, [pinkTheme, setPinkTheme]);

    return [pinkTheme, setPinkTheme];
};

export default usePinkTheme;
