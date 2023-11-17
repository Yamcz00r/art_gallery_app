import { ExploreArtworkItem } from "../types/fetch";
import { useState, useEffect } from "react";
const useInfiniteScroll = (page: number, limit: number = 10) => {
  const [results, setResults] = useState<ExploreArtworkItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    setIsError(false)
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?limit=${limit}&page=${page}&fields=id,image_id,artist_title,title`
          
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setResults((prev) => [...prev, ...data.data]);
        setHasNextPage(Boolean(data.data.length));
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();

    
  }, [page]);

  return { isLoading, results, isError, hasNextPage };
};

export default useInfiniteScroll;
