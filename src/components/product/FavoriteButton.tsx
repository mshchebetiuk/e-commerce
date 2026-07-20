'use client';

import { Product } from '@/types/product';
import { useFavorites } from '@/context/FavoritesContext';
import { toast } from 'sonner';

interface Props {
    product: Product;
}

export function FavoriteButton({ product }: Props) {
    const { toggleFavorite, isFavorite } = useFavorites();
    const favorite = isFavorite(product.id);

    return (
        <button
            onClick={() => {
                toggleFavorite(product);
                toast.success(favorite ? 'Removed from favorites' : 'Added to favorites');
            }}
            className={`w-full cursor-pointer rounded-xl px-8 py-4 font-semibold transition-colors sm:w-auto ${
                favorite 
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'border border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800'
            }`}
        >
            {favorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
        </button>
    );
}