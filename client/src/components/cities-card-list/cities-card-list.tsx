import { OffersList } from '../../types/offer';
import { CitiesCard } from '../cities-card/cities-card';
import { JSX } from 'react';

type CitiesCardListProps = {
  offersList: OffersList[];
  onListItemHover?: (offerId: string | null) => void;
};

function CitiesCardList({ offersList, onListItemHover }: CitiesCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((offer) => (
        <CitiesCard
          key={offer.id}
          id={offer.id}
          title={offer.title}
          type={offer.type}
          price={offer.price}
          previewImage={offer.previewImage}
          isPremium={offer.isPremium}
          rating={offer.rating}
           onListItemHover={onListItemHover}
        />
      ))}
    </div>
  );
}

export { CitiesCardList };