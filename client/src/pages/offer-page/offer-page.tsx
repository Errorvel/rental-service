import { JSX } from 'react';
import { useParams } from 'react-router-dom';
import { FullOffer, OffersList } from '../../types/offer';
import { Logo } from '../../components/logo/logo';
import { CommentsForm } from '../../components/coments-form/comments-form';
import { ReviewList } from '../../components/reviews-list/reviews-list';
import { Map } from '../../components/map/map';
import { reviews } from '../../mocks/reviews';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import { offersList } from '../../mocks/offer-list';
import { NotFoundPage } from '../not-found-page/not-found-page';

export type OfferPageProps = {
  offers: FullOffer[];
};

export function OfferPage({ offers }: OfferPageProps) {
  const { id } = useParams<{ id: string }>();
  
  // Добавьте эти строки для отладки:
  console.log('Current ID from URL:', id);
  console.log('Available offer IDs:', offers.map(o => o.id));
  
  const offer = offers.find((o) => o.id === id);
  
  if (!offer) {
    console.log('Offer not found for ID:', id); // Добавьте и здесь
    return <NotFoundPage />; // Лучше возвращать полноценную страницу 404
  }


  const nearby: OffersList[] = offersList
    .filter((item) => item.city.name === 'Amsterdam' && item.id !== id)
    .slice(0, 3);

  const mapPoints = [
    {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      id: offer.id,
      title: offer.title,
      price: offer.price,
      type: offer.type
    },
    ...nearby.map((item) => ({
      latitude: item.location.latitude,
      longitude: item.location.longitude,
      id: item.id,
      title: item.title,
      price: item.price,
      type: item.type
    })),
  ];

  const mapCenter: [number, number] = [
    offer.location.latitude,
    offer.location.longitude,
  ];

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__user-name user__name">
                      Myemail@gmail.com
                    </span>
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

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((imgUrl) => (
                <div key={imgUrl} className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src={`/img/${imgUrl}`}
                    alt="Place photo"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">
                    {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(offer.rating / 5) * 100}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults {/* Исправлено здесь */}
                </li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__description">
                <p className="offer__text">{offer.description}</p>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What's inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>

              <section className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={
                      offer.host.isPro
                        ? 'offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'
                        : 'offer__avatar-wrapper user__avatar-wrapper'
                    }
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={`/img/${offer.host.avatarUrl}`}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>

                <ReviewList reviews={reviews} />
                <CommentsForm
                  onSubmit={(comment, rating) => {
                    console.log('Новый комментарий:', { comment, rating });
                  }}
                />
              </section>
            </div>
            <section className="offer__map map" style={{ height: '300px', width: '100%' }}>
              <Map points={mapPoints} center={mapCenter} zoom={13} />
            </section>
          </div>

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <CitiesCardList offersList={nearby} />
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}