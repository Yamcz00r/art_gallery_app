import { ArtworkItem } from "../../types/fetch";

const fetchArtworks = async (): Promise<{ pagination: {}, data: ArtworkItem[], info: {}, config: {} }> => {
  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks?limit=10&page=1&fields=id,title,date_start,date_end,date_display,artist_title,place_of_origin,description,dimensions,medium_display,latitude,longitude,isZoomable,artist_id,publication_history,exhibition_history,image_id`
  );
  const result = await res.json();
  return result
};

const fetchArtworkById = async (
  id: number
): Promise<{ data: ArtworkItem; info: {}; config: {} }> => {
  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,date_start,date_end,date_display,artist_title,place_of_origin,description,dimensions,medium_display,latitude,longitude,isZoomable,artist_id,publication_history,exhibition_history,image_id`
  );
  if (!res.ok) {
    throw new Error("We couldn't find the resource!")
  }
  return res.json(); 
};

export { fetchArtworks, fetchArtworkById };
