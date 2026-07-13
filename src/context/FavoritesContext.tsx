'use client';

import { 
    createContext,
    useCallback,
    useContext,
    useMemo,
    useSyncExternalStore,
    ReactNode,
} from 'react';

import { Product } from '@/types/product';

const FAVORITES_KEY = 'favorites';
const FAVORITES_EVENT = 'favorites-storage-change';

interface FavoritesContextType {
    favorites: Product[];
    isLoaded: boolean;
    toggleFavorite: (product: Product) => void;
    isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

function readFavorites(): Product[] {
    if (typeof window === 'undefined') return [];

    try {
        const data = localStorage.getItem(FAVORITES_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function writeFavorites(favorites: Product[]) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    window.dispatchEvent(new Event(FAVORITES_EVENT));
}

function subscribe(callback: () => void) {
    window.addEventListener(FAVORITES_EVENT, callback);
    window.addEventListener('storage', callback);

    return () => {
        window.removeEventListener(FAVORITES_EVENT, callback);
        window.removeEventListener('storage', callback);
    };
}

function getSnapshot() {
    return JSON.stringify(readFavorites());
}

function getServerSnapshot() {
    return JSON.stringify([]);
}

export function FavoritesProvider({
    children,
}: {
    children: ReactNode;
}) {
    const favoritesSnapshot = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot,
    );

    const favorites = useMemo<Product[]>(
        () => JSON.parse(favoritesSnapshot),
        [favoritesSnapshot]
    );

    const toggleFavorite = useCallback((product: Product) => {
        const currentFavorites = readFavorites();

        const exists = currentFavorites.some(
            (item) => item.id === product.id
        );

        if (exists) {
            writeFavorites(
                currentFavorites.filter((item) => item.id !== product.id)
            );

            return;
        }

        writeFavorites([...currentFavorites, product]);
    }, []);

    const isFavorite = useCallback(
        (id: number) => favorites.some((item) => item.id === id),
        [favorites]
    );

    const value = useMemo(
        () => ({
            favorites,
            isLoaded: true,
            toggleFavorite,
            isFavorite,
        }),
        [
            favorites,
            toggleFavorite,
            isFavorite,
        ]
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