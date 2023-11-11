import { ArtworkItem, QueryParams } from "../types/fetch";
import { useEffect, useState } from "react";
import axios from 'axios';

const useInfiniteScroll = (endpoint: string, params: QueryParams) => {
    const [data, setData] = useState<ArtworkItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    const [page, setPage] = useState(params.page);

    const url = "https://api.artic.edu/api/v1/";

    const handleNextPage = () => {
        if (page === 12339) {
            return 
        }
        setPage(page + 1)
    };

    useEffect(() => {
        const getData = async () => {
            try {   
                setIsLoading(true)
                const response = await axios.get(`${url}${endpoint}?limit=${params.limit}&page=${page}`);
                if (response.status !== 200) {
                    throw new Error("Something went wrong");
                }
                setData((prevData) => [...prevData, ...response.data.data]);

            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }

        const source = axios.CancelToken.source();

        return () => {
            source.cancel("Request canceled by cleanup")
        }

        getData();
    }, [page]);

    return { data, isLoading, error, handleNextPage };
}

export default useInfiniteScroll;