// src/index.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import 'leaflet/dist/leaflet.css';

import { App } from './components/app/app';
import { store } from './store';

import { offers } from './mocks/offer';
import { offersList } from './mocks/offer-list';
import { AuthorizationStatus } from './const';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offersList={offersList}
        offers={offers}
        authorizationStatus={AuthorizationStatus.Auth}
      />
    </Provider>
  </React.StrictMode>
);
