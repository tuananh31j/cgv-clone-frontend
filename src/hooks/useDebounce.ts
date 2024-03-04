import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay: number, callback: (value?: T) => Promise<void>) => {
    const [debounceValue, setDebounceValue] = useState<T>(value);
    useEffect(() => {
        const handleDelay = setTimeout(async () => {
            setDebounceValue(value);
            await callback(debounceValue);
        }, delay);

        return clearTimeout(handleDelay);
    }, [value, delay, debounceValue, callback]);
};

export default useDebounce;
