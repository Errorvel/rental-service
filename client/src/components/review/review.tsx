import React from "react";
import { Review } from "../../types/review";

type ReviewProps = {
  review: Review;
};

export function ReviewItem({ review }: ReviewProps): React.JSX.Element {
  const { comment, date, rating, user } = review;
  const reviewDate = new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
  });
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="User avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
        {user.isPro && <span className="property__user-status">Pro</span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {reviewDate}
        </time>
      </div>
    </li>
  );
}
