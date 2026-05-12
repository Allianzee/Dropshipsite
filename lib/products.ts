export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  currency: "eur";
  tag: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: "cloud-bag",
    name: "Cloud Travel Bag",
    description: "Minimal travel bag.",
    longDescription:
      "A premium everyday travel bag designed for school, gaming setups, travel, and daily use. Waterproof outer shell with modern clean styling.",
    price: 2999,
    currency: "eur",
    tag: "BAG",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d"
    ]
  },
  {
    id: "pulse-lamp",
    name: "Pulse Desk Lamp",
    description: "RGB setup lamp.",
    longDescription:
      "Modern RGB desk lamp perfect for gaming setups, bedrooms, streaming, and workspaces.",
    price: 2499,
    currency: "eur",
    tag: "LAMP",
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944"
    ]
  },
  {
    id: "aero-bottle",
    name: "Aero Steel Bottle",
    description: "Steel insulated bottle.",
    longDescription:
      "Double-wall insulated bottle that keeps drinks cold for hours with a clean matte design.",
    price: 1999,
    currency: "eur",
    tag: "BOTL",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504",
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd"
    ]
  }
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function formatPrice(cents: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR"
  }).format(cents / 100);
}export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function formatPrice(cents: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}
