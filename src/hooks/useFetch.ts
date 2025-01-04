import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

interface UseFetchResult<T> {
    data: T | null;
    error: string | null;
    isLoading: boolean;
}

export const useFetch = <T>(url: string): UseFetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get<T>(url);
                setData(response.data);
            } catch (err: unknown) {
                const errorMessage =
                    err instanceof AxiosError
                        ? err.response?.data?.message || err.message
                        : "Произошла неизвестная ошибка";
                setError(errorMessage);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, isLoading };
};
