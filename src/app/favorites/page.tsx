'use client';

import { ProductGrid } from '@/components/product/ProductGrid';
import { useFavorites } from '@/context/FavoritesContext';

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    return (
        <main className="mx-auto max-w-7xl px-4 py-10">
            <h1 className="mb-8 text-4xl font-bold">
                Favorites
            </h1>

            {favorites.length === 0 ? (
                <p>No favorite products yet.</p>
            ) : (
                <ProductGrid products={favorites} />
            )}
        </main>
    );
}