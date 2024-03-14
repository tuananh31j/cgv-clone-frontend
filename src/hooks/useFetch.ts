import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const useFetch = <T>(apiRequest: () => Promise<T>, dep?: React.DependencyList) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const res = await apiRequest();
                setData(res);
                setLoading(false);
            } catch (error) {
                await new Promise((resolve) => {
                    setTimeout(resolve, 3000);
                });
                setError('Đang cập nhật!');
                setLoading(false);
            }
        })();
    }, [apiRequest, dep]);

    return { data, loading, error };
};

export default useFetch;
