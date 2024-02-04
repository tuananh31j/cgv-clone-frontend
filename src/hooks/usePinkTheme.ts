import { useCallback, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { pinkMode } from '~/store/Slices/Theme.slice';
const usePinkTheme = () => {
    const [pinkTheme, setPinkTheme] = useLocalStorage('pink-theme', false);

    const dispatch = useDispatch();

    const addClass = useCallback(
        (bodyElement: DOMTokenList, className: string) => {
            bodyElement.add(className);
            dispatch(pinkMode(true));
        },
        [dispatch]
    );

    const removeClass = useCallback(
        (bodyElement: DOMTokenList, className: string) => {
            bodyElement.remove(className);
            dispatch(pinkMode(false));
        },
        [dispatch]
    );

    useEffect(() => {
        const bodyElement = window.document.body.classList;
        const className = 'pink__theme';
        pinkTheme ? addClass(bodyElement, className) : removeClass(bodyElement, className);
    }, [pinkTheme, addClass, removeClass]);

    return [pinkTheme, setPinkTheme];
};

export default usePinkTheme;
