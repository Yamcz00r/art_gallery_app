export interface QueryParams {
  page: number;
  limit: number;
}

export interface ArtworkItem {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  date_start: number;
  date_end: number;
  date_display: string;
  artist_display: string;
  place_of_origin: string;
  description: string | null;
  dimensions: string;
  medium_display: string;
  inscriptions: string | null;
  credit_line: string;
  catoluge_display: string | null;
  publication_history: string;
  exhibition_history: string;
  provenance_text: string;
  isZoomable: boolean;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  latitude: number;
  longitude: number;
  artwork_type_title: string;
  artist_id: number;
  artist_title: string;
  artist_ids: string[];
  artist_titles: string[];
}

interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}
