import { FullOffer } from '../../types/offer';
import { FavoriteCard } from '../favorite-card/favorite-card';

type FavoriteCardListProps = {
  offers: FullOffer[];
};

export function FavoriteCardList({ offers }: FavoriteCardListProps) {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <FavoriteCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}