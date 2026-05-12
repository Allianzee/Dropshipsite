export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: "eur";
  tag: string;
};

export const products: Product[] = [
  {
    id: "cloud-bag",
    name: "Cloud Travel Bag",
    description: "A clean everyday bag for school, travel, gym, and random life chaos.",
    price: 2999,
    currency: "eur",
    tag: "BAG",
  },
  {
    id: "pulse-lamp",
    name: "Pulse Desk Lamp",
    description: "Minimal RGB-style desk lamp for setups, studying, and late night grinding.",
    price: 2499,
    currency: "eur",
    tag: "LAMP",
  },
  {
    id: "aero-bottle",
    name: "Aero Steel Bottle",
    description: "Reusable insulated bottle with a smooth matte look.",
    price: 1999,
    currency: "eur",
    tag: "BOTL",
  },
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function formatPrice(cents: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}
