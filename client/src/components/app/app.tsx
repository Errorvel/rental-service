import { JSX } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { MainPage } from '../../pages/main-page/main-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { FavoritesPage } from '../../pages/favorities-page/favorities-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { NotFoundPage } from '../not-found/not-found';
import { PrivateRoute } from '../private-route/private-route';
import { FullOffer, OffersList } from '../../types/offer';

type AppProps = {
  rentalOffersCount: number;
  offersList: OffersList[];
  offers: FullOffer[];
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
};

export function App({
  rentalOffersCount,
  offersList,
  offers,
  authorizationStatus,
}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage 
                rentalOffersCount={rentalOffersCount}
                offersList={offersList}
              />
            }
          />

          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage offers={offers} />
              </PrivateRoute>
            }
          />

          <Route 
            path={`${AppRoute.Offer}/:id`} 
            element={<OfferPage offers={offers} />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}