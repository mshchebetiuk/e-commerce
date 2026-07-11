import type { Metadata } from "next";

import { Header } from '@/components/layout/Header';
import { Footer } from "@/components/layout/Footer";

import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

import './globals.css';

export const metadata: Metadata = {
  title: "E-Commerce Store",
  description: "Pet project built with Next.js, TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="flex min-h-screen flex-col">
          <CartProvider>
            <FavoritesProvider>
              <Header />
                <main className="flex-1">{children}</main>
              <Footer />
            </FavoritesProvider>
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
