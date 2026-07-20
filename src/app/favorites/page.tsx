'use client';

import { ProductGrid } from '@/components/product/ProductGrid';
import { useFavorites } from '@/context/FavoritesContext';
import { EmptyState } from '@/components/ui/EmptyState';

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    return (
        <main className="mx-auto max-w-7xl px-4 py-10">
            <h1 className="mb-8 text-4xl font-bold transition-colors dark:text-white">
                Favorites
            </h1>

            {favorites.length === 0 ? (
                <EmptyState 
                    icon='🤍'
                    title='No favorites yet'
                    description='Save products you like and find them here later.'
                    actionText='Browse Products'
                    actionHref='/products'
                />
            ) : (
                <ProductGrid products={favorites} />
            )}
        </main>
    );
}