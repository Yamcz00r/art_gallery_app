import { useState, useEffect } from "react";
import { ExploreArtworkItem } from "../types/fetch";

const useFetchByQuery = (query: string | undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [results, setResults] = useState<ExploreArtworkItem[]>([]);

  const baseUrl = `https://api.artic.edu/api/v1/artworks/search?q=${query}&fields=api_link`;

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
        const apiLinks: string[] = data.data.map((link: { api_link: string }) => link.api_link);

        const fetchArtworksData = apiLinks.map(async (endpoint) => {
          const artworkResponse = await fetch(endpoint);

          if (!artworkResponse.ok) {
            throw new Error("Error with fetching artwork")
          }
          const artworkData = await artworkResponse.json();
          const data = artworkData.data;
          return data;
        });

        const artworksData = await Promise.all(fetchArtworksData);
        setResults(artworksData)
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);
  
  return { results, isLoading, isError };
};
export default useFetchByQuery;
