import { useState, useEffect } from "react";
import { ArtworkItem } from "../../types/fetch";

const useFetch = (endpoint: string, limit: number = 10, page: number = 1) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [results, setResults] = useState<ArtworkItem[]>([]);

  const baseUrl = `https://api.artic.edu/api/v1/${endpoint}?limit=${limit}&page=${page}&fields=id,title,date_start,date_end,date_display,artist_title,place_of_origin,description,dimensions,medium_display,latitude,longitude,isZoomable,artist_id,publication_history,exhibition_history,image_id`;

  useEffect(() => {
    setIsLoading(false);
    setIsError(false);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error("Someting went wrong");
        }
        const data = await response.json();
        setResults((prevResults) => [...prevResults, ...data.data]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData()
  }, []);

  return { results, isLoading, isError };
};
export default useFetch;