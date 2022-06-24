export interface ExploreData {
  img: string;
  location: string;
  distance: string;
}
export interface CardData {
  img: string;
  title: string;
}
export interface SearchResultData {
  description: string;
  img: string;
  lat: number;
  location: string;
  long: number;
  price: string;
  star: number;
  title: string;
  total: string;
}
export interface ViewportData {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
}
export interface LocationData {
  latitude: number;
  longitude: number;
}
