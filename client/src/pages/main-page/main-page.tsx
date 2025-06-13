import { JSX, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import { Logo } from '../../components/logo/logo';
import { Map } from '../../components/map/map';
import { CitiesList } from '../../components/cities-list/cities-list';
import { SortOptions } from '../../components/sort-options/sort-options';
import { useAppSelector } from '../../hooks';
import { filterOffersByCity, sortOffersByType } from '../../utils';
import { OffersList } from '../../types/offer';
import { SortOffer } from '../../types/sort';

export function MainPage(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);


  const selectedCityOffers = filterOffersByCity(allOffers, selectedCity.name);
  const rentalOffersCount = selectedCityOffers.length;

  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');
  const [hoveredOffer, setHoveredOffer] = useState<OffersList | null>(null);


  useEffect(() => {
    setHoveredOffer(null);
  }, [selectedCity]);

  const handleListItemHover = (offerId: string | null) => {
    if (!offerId) {
      setHoveredOffer(null);
      return;
    }
    const found = selectedCityOffers.find((offer) => offer.id === offerId) || null;
    setHoveredOffer(found);
  };
  const cityCenter: [number, number] = [
    selectedCity.location.latitude,
    selectedCity.location.longitude
  ];

  const sortedOffers = sortOffersByType(selectedCityOffers, activeSort);

  const points = sortedOffers.map((offer: OffersList) => ({
    id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    title: offer.title,
    price: offer.price,
    type: offer.type,
  }));
  const hoveredLocation: [number, number] | null = hoveredOffer
    ? [hoveredOffer.location.latitude, hoveredOffer.location.longitude]
    : null;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <section className="tabs">
          <div className="locations container">
            <CitiesList selectedCity={selectedCity} />
          </div>
        </section>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <b className="places__found">
                {rentalOffersCount} places to stay in {selectedCity.name}
              </b>

              <SortOptions
                activeSorting={activeSort}
                onChange={setActiveSort}
              />

              <CitiesCardList
                offersList={sortedOffers}
                onListItemHover={handleListItemHover}
              />
            </section>

            <div className="cities__right-section">
              <section
                className="cities__map map"
                style={{ height: '500px', width: '100%' }}
              >
              <Map
          points={sortedOffers.map(offer => ({
            id: offer.id,
            latitude: offer.location.latitude,
            longitude: offer.location.longitude
          }))}
          center={cityCenter}
          zoom={selectedCity.location.zoom}
          selectedPointId={hoveredOffer?.id || null}
        />

              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
