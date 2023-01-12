// react custom api fetch hook
import axios from 'axios';
import { useEffect, useState } from 'react';

// useAPI hook
export default function useAPI(asyncFunction, body, query) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dep, setDep] = useState(null);

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${ localStorage.getItem("token") }`;
        setData(null);
        setError(null);
        setLoading(true);
        // call asyncFunction and pass body as an argument
        asyncFunction(body, query)
            .then(res => {
                setData(res.data);
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                setError(err.response.data);
                setData(null);
                setLoading(false);
            });
    }, [asyncFunction, body, query, dep]);

    return { data, error, loading, setDep, setData };
};