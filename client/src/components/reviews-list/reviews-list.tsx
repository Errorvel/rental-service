import React from "react";
import { Review } from "../../types/review";
import { ReviewItem } from "../review/review";
type ReviewListProps = {
  reviews: Review[];
};

export function ReviewList({ reviews }: ReviewListProps): React.JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
    </section>
  );
}
