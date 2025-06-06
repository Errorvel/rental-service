import { useState } from 'react';
import React from 'react';
type CommentsFormProps = {
  onSubmit: (comment: string, rating: number) => void;
};

export function CommentsForm({ onSubmit }: CommentsFormProps) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  

  const isValid = comment.length >= 50 && rating > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(comment, rating);
      setComment('');
      setRating(0);
    }
  };

  return (
    <form 
      className="reviews__form form" 
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((value) => (
          <React.Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={rating === value}
              onChange={() => setRating(value)}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title=""
            >
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(e) => setComment(e.target.value)} 
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid} 
        >
          Submit
        </button>
      </div>
    </form>
  );
}