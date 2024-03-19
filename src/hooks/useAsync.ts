import { useCallback, useEffect, useState } from 'react';

type UseAsyncReturnType<T> = {
    loading: boolean;
    error: unknown;
    value: T | undefined;
};

const useAsync = <T>(apiRequest: () => Promise<T>, dep: React.DependencyList = []): UseAsyncReturnType<T> => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>();
    const [value, setValue] = useState<T>();

    const memoizedCallback = useCallback(apiRequest, [...dep]);

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        (async () => {
            try {
                const res = await memoizedCallback();
                setLoading(false);
                setValue(res);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        })();
    }, [memoizedCallback]);

    return { loading, error, value };
};

export default useAsync;
