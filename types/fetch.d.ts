export interface QueryParams {
  page: number;
  limit: number;
}

export interface ArtworkResponse {
  pagination: {};
  data: ArtworkItem[];
  info: {};
  config: {}
}

export interface ArtworkItem {
  id: number;
  title: string;
  date_start: number;
  date_end: number;
  date_display: string;
  artist_title?: string;
  place_of_origin?: string;
  description?: string;
  dimensions?: string;
  medium_display?: string;
  is_zoomable?: boolean
  credit_line?: string;
  latitude?: number;
  longitude?: number;
  artist_id?: number;
  image_id?: string;
  artwork_type_title?: string;
  department_title?: string;
}

export interface ExploreArtworkItem {
  id: number,
  image_id?: string,
  title?: string,
  artist_title?: string;
}