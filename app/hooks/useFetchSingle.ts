import { useState, useEffect } from "react";
import { ArtworkItem } from "../../types/fetch";

const useFetchSingle = (endpoint: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [result, setResult] = useState<ArtworkItem>();

  const baseUrl = `https://api.artic.edu/api/v1/${endpoint}?fields=id,title,date_start,date_end,date_display,artist_title,place_of_origin,description,dimensions,medium_display,latitude,longitude,is_zoomable,artist_id,image_id,artwork_type_title,department_title`;

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
        setResult(data.data);
      } catch (error) {
        console.log(error)
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData()
  }, []);

  return { result, isLoading, isError };
};
export default useFetchSingle;