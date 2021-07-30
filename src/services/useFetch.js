import { useEffect, useState } from 'react';

export default function useFetch(dataurl) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    async function getData() {
        const response = await fetch(dataurl
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        if (response.ok) return response.json();
        throw response;

    }
    useEffect(() => {
        getData()
            .then((response) => setData(response))
            .catch((e) => setError(e))
            .finally(() => setLoading(false));
    }, [dataurl])

    return { data, error, loading };
}