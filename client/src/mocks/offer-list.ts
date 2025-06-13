import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  {
    id: "b0be6b3e-3192-446d-9a68-cb64b5a38e2b",
    title: "Уютная квартира в центре Парижe",
    type: "apartment",
    price: 370,
    previewImage: "apartment-01.jpg", 
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
    isFavorite: true,
    isPremium: false,
    rating: 4.9
  },
  {
    id: "a2c5f8d1-4b67-4e89-9cde-1234567890ab",
    title: "Лофт в индустриальном стиле недалеко от музеев",
    type: "apartment",
    price: 420,
    previewImage: "amsterdam1.jpg", 
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
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  },
  {
    id: "e1f8a2b3-9cde-4a76-a123-ffeeddccbbaa",
    title: "Дизайнерская студия в историческом здании",
    type: "apartment",
    price: 330, 
    previewImage: "амс1.jpg", 
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
    isFavorite: true,
    isPremium: false,
    rating: 4.4
  },
  {
    id: "c3d9e6f2-5a78-4bcd-8e12-9876543210dc",
    title: "Современные студии у Европарламента",
    type: "house",
    price: 290,
    previewImage: "brus.jpg", 
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
    isFavorite: true,
    isPremium: false,
    rating: 4.8
  },
  {
    id: "d4e7f8a3-6b12-4c56-9d01-abcdef123456",
    title: "Мансарда с террасой у Кёльнского собора",
    type: "room",
    price: 95,
    previewImage: "CLL3.jpg", 
    city: {
      name: "Cologne",
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 13
      }
    },
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 15
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5
  }
];