import React from 'react'
import ReactDOM from 'react-dom/client';
import { Setting } from './setting'
import { offers } from './mocks/offer'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css';
import {App} from './components/app/app';
import { offersList } from './mocks/offer-list'
import { AuthorizationStatus } from './const';
const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App
      rentalOffersCount={Setting.RentalOffersCount}
      offersList={offersList}
      offers={offers}
      authorizationStatus={AuthorizationStatus.Auth}
    />
  </React.StrictMode>
);