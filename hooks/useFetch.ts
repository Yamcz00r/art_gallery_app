import axios from "axios";
import { useState, useEffect } from "react";
import { QueryParams, ArtworkItem } from "../types/fetch";

function useFetch(endpoint: string, params: QueryParams) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<Array<ArtworkItem>>([])

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://api.artic.edu/api/v1/${endpoint}?limit=${params.limit}&page=${params.page}`);
            if (response.status !== 200) {
                throw new Error("Sometihng went wrong")
            }
            const data = response.data.data;
            setData(data);
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    const refetch = () => {
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, isLoading, error }
}
export default useFetch;