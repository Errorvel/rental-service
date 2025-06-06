import { Review } from "../types/review"
const reviews : Review[] = [
    {
        'id': '463623e8-eecc-42a2-b2fc-797a299b5230',
        'comment': 'The room was spacious and clean. The pool looked nothing like the photos',
        'date': '2023-06-29T21:00:00.465Z',
        'rating': 4,
        'user': {
            'name': 'Isaac',
            'avatarUrl': 'img/avatar/8.jpg',
            'isPro': true
},
  },
  {
    id: 'f7f51b2a-5e18-4eff-b16b-13cf5f17d380',
    comment:
      'Не понравился вид из окна, ужасный шум с улицы. Уборка могла быть получше.',
    date: '2023-11-10T19:45:00.000Z',
    rating: 3,
    user: {
      name: 'Max',
      avatarUrl: 'avatar/5.jpg',
      isPro: false,
    },
  },
];
export {reviews};