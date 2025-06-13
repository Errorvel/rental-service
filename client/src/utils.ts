import { CityOffer, OffersList } from './types/offer';
import {SortOffer} from './types/sort'
import { SortOffersType } from './const';

export function getCityByName(name: string, cities: CityOffer[]): CityOffer | undefined {
  return cities.find((c) => c.name === name);
}

export function filterOffersByCity(offers: OffersList[], cityName: string): OffersList[] {
  return offers.filter(offer => offer.city.name === cityName);
}

export function sortOffersByType(
  offers: OffersList[],
  type: SortOffer
): OffersList[] {
  switch (type) {
    case SortOffersType.PriceToHigh:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortOffersType.PriceToLow:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortOffersType.TopRated:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}