'use client';

import { Heart } from 'lucide-react';
import { toast } from 'sonner';

import { Product } from '@/types/product';
import { useFavorites } from '@/context/FavoritesContext';

interface Props {
    product: Product;
}

export function FavoriteIconButton({ product }: Props) {
    const { toggleFavorite, isFavorite } = useFavorites();
    const favorite = isFavorite(product.id);

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                toggleFavorite(product);

                toast.success(
                    favorite 
                        ? 'Removed from favorites'
                        : 'Added to favorites'
                );
            }}
            className={`rounded-full p-3 transition cursor-pointer ${
                favorite 
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-white hover:bg-gray-100'
            }`}
            aria-label="Toggle favorite"
        >
            <Heart 
                size={18}
                fill={favorite ? 'currentColor' : 'none'}
            />
        </button>
    )
}