export type Offer = {
  slug: string;
  title: string;
  description: string;
  priceFromUSD: number;
  image: string;
  terms: string;
};

export const offers: Offer[] = [
  {
    slug: "seasonal-deal",
    title: "Seasonal Deal",
    description: "Enjoy exclusive seasonal rates including complimentary breakfast, priority check-in, and late checkout — the best value for your stay in Nekemte.",
    priceFromUSD: 110,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=85",
    terms: "Subject to availability. Limited rooms per day at this rate. Advance booking is strongly recommended."
  },
  {
    slug: "honeymoon",
    title: "Honeymoon Package",
    description: "A romantic escape in Nekemte — includes a candle-lit dinner at our restaurant, a fruit platter on arrival, and a late checkout for a relaxed morning.",
    priceFromUSD: 180,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=85",
    terms: "Available for couples. Romantic setup, flowers, and sparkling drinks included for the first night of your stay."
  },
  {
    slug: "corporate-rate",
    title: "Corporate Rate",
    description: "Designed for business travelers — enjoy dedicated workspaces, reliable high-speed Wi-Fi, and flexible invoicing for your company.",
    priceFromUSD: 125,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=85",
    terms: "Company purchase order or approval letter required for invoicing. Please contact us in advance to arrange corporate billing."
  }
];
