'use client';

import { 
    createContext,
    useContext,
    useMemo,
    useState,
    ReactNode,
} from 'react';

import { Product } from '@/types/product';

interface FavoritesContextType {
    favorites: Product[];
    toggleFavorite: (product: Product) => void;
    isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [favorites, setFavorites] = useState<Product[]>([]);

    function toggleFavorite(product: Product) {
        setFavorites((prev) => {
            const exists = prev.some((item) => item.id === product.id);

            if (exists) {
                return prev.filter((item) => item.id !== product.id);
            }

            return [...prev, product];
        });
    }

    function isFavorite(id: number) {
        return favorites.some((item) => item.id === id);
    }

    const value = useMemo(
        () => ({
            favorites,
            toggleFavorite,
            isFavorite,
        }),
        [favorites]
    );

    return (
        <FavoritesContext value={value}>
            {children}
        </FavoritesContext>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error('useFavorites must be used inside FavoirtesProvider');
    }

    return context;
}