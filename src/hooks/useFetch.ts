import { useState, useEffect } from "react";

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
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(
                        `Ошибка: ${response.status} ${response.statusText}`
                    );
                }
                const result = await response.json();
                setData(result);
            } catch (err: unknown) {
                const errorMessage =
                    err instanceof Error
                        ? err.message
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
