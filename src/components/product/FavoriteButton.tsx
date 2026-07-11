'use client';

import { Product } from '@/types/product';
import { useFavorites } from '@/context/FavoritesContext';

interface Props {
    product: Product;
}

export function FavoriteButton({ product }: Props) {
    const { toggleFavorite, isFavorite } = useFavorites();
    const favorite = isFavorite(product.id);

    return (
        <button
            onClick={() => toggleFavorite(product)}
            className='rounded-lg border px-4 py-2'
        >
            {favorite ? '❤️ Remove' : '🤍 Favorite'}
        </button>
    );
}