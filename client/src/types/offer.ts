type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};
type CityOffer = {
  name: string;
  location: OfferLocation;
};
type Host0ffer = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
export type FullOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityOffer;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host0ffer;
  images: string[];
  maxAdults: number;
};
export type OffersList = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};