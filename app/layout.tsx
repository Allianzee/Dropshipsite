import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaDrop Store",
  description: "Clean dropshipping storefront built with Next.js, Vercel, and Stripe.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
