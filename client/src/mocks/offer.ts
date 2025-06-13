// src/mocks/offers.ts

import { FullOffer } from '../types/offer';

export const offers: FullOffer[] = [
  {
    id: "b0be6b3e-3192-446d-9a68-cb64b5a38e2b",
    title: "Уютная квартира в центре Парижe",
    description: "Светлая и современная квартира рядом с Лувром и Сенной. Отличный вариант для пары или небольшой семьи",
    type: "apartment",
    price: 370,
    images: [
      'apartment-01.jpg',
      'apartment-02.jpg',
      'apartment-03.jpg',
      'studio-01.jpg',
      'room.jpg'
    ],
    city: {
      name: "Paris",
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    goods: [
      'Heating',
      'Wi-Fi',
      'Fridge',
      'Laptop friendly workspace',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Dishwasher',
      'Kitchen',
      'Washing machine',
      'Breakfast',
      'Coffee machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 2,
    maxAdults: 3
  },
  {
    id: "a2c5f8d1-4b67-4e89-9cde-1234567890ab",
    title: "Лофт в индустриальном стиле недалеко от музеев",
    description: "Квартира-лофт с дизайнерским интерьером в районе музеев Амстердама. Тихое и комфортное место.",
    type: "apartment",
    price: 420,
    images: [
      'amsterdam1.jpg',
      'amsterdam2.jpg',
      'amsterdam3.jpg',
      'amsterdam4.jpg'
    ],
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13
      }
    },
    location: {
      latitude: 52.374540,
      longitude: 4.897976,
      zoom: 16
    },
    goods: [
      'Breakfast',
      'Fridge',
      'Towels',
    ],
    host: {
      isPro: false,
      name: 'Max',
      avatarUrl: 'avatar-max.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.7,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: "e1f8a2b3-9cde-4a76-a123-ffeeddccbbaa",
    title: "Дизайнерская студия в историческом здании",
    description: "уникальную дизайнерскую студию, расположенную в самом сердце Амстердама в здании XVII века. Пространтсво сочетатет в себе исторический шарм Амстердама.",
    type: "apartment",
    price: 330,
    images: [
      'амс2.jpg',
      'амс3.jpg',
      'амс4.jpg',
      'амс5.jpg'
    ],
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13
      }
    },
    location: {
      latitude: 52.372123,
      longitude: 4.900987,
      zoom: 16
    },
    goods: [
      'Breakfast',
      'Fridge',
      'Towels',
    ],
    host: {
      isPro: false,
      name: 'Max',
      avatarUrl: 'avatar-max.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.4,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: "c3d9e6f2-5a78-4bcd-8e12-9876543210dc",
    title: "Современные студии у Европарламента",
    description: "Мини-бар, кухня-гостиная и выход в парк.",
    type: "house",
    price: 290,
    images: [
      'brus.jpg',
      'brus1.jpg',
      'brus2.jpg',
      'brus3.jpg'
    ],
    city: {
      name: "Brussels",
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 13
      }
    },
    location: {
      latitude: 50.847620,
      longitude: 4.357130,
      zoom: 14
    },
    goods: [
      'Laptop friendly workspace',
      'Wi-Fi',
      'Kitchen',
      'Towels',
    ],
    host: {
      isPro: true,
      name: 'Sophie',
      avatarUrl: 'avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 5
  },
  {
    id: "d4e7f8a3-6b12-4c56-9d01-abcdef123456",
    title: "Мансарда с террасой у Кёльнского собора",
    description: "Панорамный вид на собор, стеклянные стены и сауна.",
    type: "room",
    price: 95,
    images: [
      'CLL3.jpg',
      'CLL4.jpg',
      'CLL5.jpg',
      'CLL6.jpg'
    ],
    city: {
      name: "Cologne",
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 13
      }
    },
    location: {
      latitude: 50.940000,
      longitude: 6.965000,
      zoom: 15
    },
    goods: [
      'Heating',
      'Wi-Fi',
      'TV',
      'Coffee machine',
      'Refrigerator',
      'Microwave',
      'Hair dryer'
    ],
    host: {
      isPro: false,
      name: 'Michael',
      avatarUrl: 'avatar-max.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 1
  }
];