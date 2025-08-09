// Offers and promotions data
export const offersData = [
  {
    id: 1,
    title: "Скидка 20% на первый заказ",
    description: "Специальное предложение для новых клиентов YokoSun",
    code: "YOKOSUN20",
    validUntil: "31 декабря 2025",
    color: "from-red-500 to-pink-500",
    discount: 0.2
  },
  {
    id: 2,
    title: "Бесплатная доставка",
    description: "При заказе японских подгузников от 15,000 ₸",
    code: "FREE_DELIVERY",
    validUntil: "Постоянно",
    color: "from-green-500 to-emerald-500",
    minAmount: 15000
  },
  {
    id: 3,
    title: "Набор для новорожденного",
    description: "Полный комплект YokoSun со скидкой 30%",
    code: "NEWBORN30",
    validUntil: "15 февраля 2025",
    color: "from-purple-500 to-violet-500",
    discount: 0.3
  }
];

export const promoCodes = {
  YOKOSUN20: {
    type: 'percentage',
    value: 20,
    description: 'Скидка 20% на первый заказ'
  },
  FREE_DELIVERY: {
    type: 'free_shipping',
    minAmount: 15000,
    description: 'Бесплатная доставка при заказе от 15,000₸'
  },
  NEWBORN30: {
    type: 'percentage',
    value: 30,
    description: 'Скидка 30% на набор для новорожденного'
  }
};