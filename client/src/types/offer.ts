// src/types/offer.ts

export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityOffer = {
  name: string;
  location: OfferLocation;
};

export type HostOffer = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

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
  host: HostOffer;
  images: string[];       // Здесь хранится массив фотографий
  maxAdults: number;
};

// Компонент CitiesCardList ожидает именно такой набор полей:
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
  previewImage: string;   // <-- сюда мы должны взять images[0] из FullOffer
};
