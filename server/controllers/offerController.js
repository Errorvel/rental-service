import ApiError from '../error/ApiError.js';
import { Offer } from '../models/offer.js';
import { User } from '../models/user.js';
import { adaptOfferToClient, adaptFullOfferToClient } from '../adapters/offerAdapter.js';

export async function getAllOffers(req, res, next) {
  try {
    const limit = parseInt(req.query.limit, 10) || 50;
    const offset = parseInt(req.query.offset, 10) || 0;
    const offers = await Offer.findAll({ limit, offset });
    const adaptedOffers = offers.map(adaptOfferToClient);
    return res.status(200).json({ data: adaptedOffers, limit, offset });
  } catch (error) {
    console.error('getAllOffers error:', error);
    return next(ApiError.internal('Не удалось получить список предложений!'));
  }
}

export async function createOffer(req, res, next) {
  try {
    const {
      title, description, publishDate, city,
      isPremium, isFavorite, rating, type, rooms, guests, price,
      features, commentsCount, latitude, longitude, userId
    } = req.body;

    if (!title || !description || !city || !type) {
      return next(ApiError.badRequest('Проверьте обязательные текстовые поля'));
    }
    if (!req.files?.previewImage?.length) {
      return next(ApiError.badRequest('Превью изображение обязательно для загрузки'));
    }

    const author = await User.findByPk(userId);
    if (!author) {
      return next(ApiError.badRequest(`Пользователь с id=${userId} не найден`));
    }

    const previewImagePath = `/static/${req.files.previewImage[0].filename}`;
    const processedPhotos = (req.files.photos || [])
      .map(file => `/static/${file.filename}`);

    let parsedFeatures = [];
    if (features) {
      try {
        parsedFeatures = typeof features === 'string'
          ? JSON.parse(features)
          : features;
      } catch {
        parsedFeatures = features
          .split(',')
          .map(f => f.trim());
      }
    }
    const offer = await Offer.create({
      title,
      description,
      publishDate: publishDate ? new Date(publishDate) : new Date(),
      city,
      previewImage: previewImagePath,
      photos: processedPhotos,
      isPremium: isPremium === 'true' || isPremium === true,
      isFavorite: isFavorite === 'true' || isFavorite === true,
      rating: parseFloat(rating),
      type,
      rooms: parseInt(rooms, 10),
      guests: parseInt(guests, 10),
      price: parseInt(price, 10),
      features: parsedFeatures,
      commentsCount: parseInt(commentsCount, 10) || 0,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      authorId: userId
    });

    const adapted = adaptFullOfferToClient(await offer.reload({ include: { model: User, as: 'author' } }));
    return res.status(201).json(adapted);
  } catch (error) {
    console.error('createOffer error:', error);
    return next(ApiError.internal('Не удалось добавить предложение: ' + error.message));
  }
}

export async function getFullOffer(req, res, next) {
  try {
    const { id } = req.params;
    if (isNaN(Number(id))) {
      return next(ApiError.badRequest('Некорректный идентификатор оффера'));
    }
    const offer = await Offer.findByPk(id, {
      include: { model: User, as: 'author' }
    });
    if (!offer) {
      return next(ApiError.badRequest('Оффер не найден'));
    }
    const result = adaptFullOfferToClient(offer);
    return res.status(200).json(result);
  } catch (error) {
    return next(ApiError.internal('Ошибка получения полного оффера'));
  }
}
