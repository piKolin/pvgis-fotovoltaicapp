import { useEffect, useState } from 'react';

type UseApiResult<T> = {
	data: T | null;
	loading: boolean;
	error: Error | null;
};

// export const useApi = (url) => {
const useApi = <T>(url: string): UseApiResult<T> => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [url]);

	return { data, loading, error };
};

export default useApi;
