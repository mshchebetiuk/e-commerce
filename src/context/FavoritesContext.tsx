'use client';

import { 
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    ReactNode,
} from 'react';

import { Product } from '@/types/product';

const FAVORITES_KEY = 'favorites';

interface FavoritesContextType {
    favorites: Product[];
    isLoaded: boolean;
    toggleFavorite: (product: Product) => void;
    isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

function getStoredFavorites(): Product[] {
    if (typeof window === 'undefined') return [];

    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
}

function saveFavorites(favorites: Product[]) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function FavoritesProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [favorites, setFavorites] = useState<Product[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setFavorites(getStoredFavorites());
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;
        saveFavorites(favorites);
    }, [favorites, isLoaded]);

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
            isLoaded,
            toggleFavorite,
            isFavorite,
        }),
        [favorites, isLoaded]
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