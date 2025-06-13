import { createReducer } from '@reduxjs/toolkit';
import { offersList as MOCK_OFFERS_LIST } from '../mocks/offer-list';
import { getCityByName } from '../utils';
import { changeCity, offersCityList } from './actions';
import { CITIES_LOCATION, CityOffer } from '../const';
import { OffersList } from '../types/offer';

type OffersState = {
  city: CityOffer;
  offers: OffersList[];
};

const defaultCity = getCityByName('Paris', CITIES_LOCATION)!;

const initialState: OffersState = {
  city: defaultCity,
  offers: MOCK_OFFERS_LIST,
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersCityList, (state, action) => {
      state.offers = action.payload;
    });
});