import { Review } from '../models/review.js';
import { adaptReviewToClient } from "../adapters/reviewAdapter.js";
import ApiError from '../error/ApiError.js';
import { User } from '../models/user.js';

const addReview = async (req, res, next) => {
    try {
        const { comment, rating } = req.body;
        const offerId = req.params.offerId;
        const userId = req.user.id;
        
        if (!comment || !rating || !offerId) {
            return next(ApiError.badRequest('He хватает данных для комментария'));
}
const review = await Review.create({
    text: comment,
    rating,
    authorId: userId,
    OfferId: offerId
});
res.status(201).json(review);
}
catch (error) {
console.error(error);
next(ApiError.badRequest('Ошибка при добавлении комментария'));
}};


const getReviewsByOfferId = async (req, res, next) => {
try {
const reviews = await Review.findAll({
where: { OfferId: req.params.offerId },
include: { model: User, as: 'author' },
order: [['publishDate', 'DESC']]
});
const adaptedReviews = reviews.map(adaptReviewToClient);
res.json(adaptedReviews); }
catch (error) {
console.error(error);
next(ApiError.internal('Ошибка при получении комментариев'));
}
};

const getFavoriteOffers = async (req, res) => {
  try {
    const favoriteOffers = await db.query('SELECT * FROM offers WHERE "isFavorite" = TRUE');

    res.status(200).json(favoriteOffers.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при получении избранных офферов' });
  }
};

export { addReview, getReviewsByOfferId, getFavoriteOffers};