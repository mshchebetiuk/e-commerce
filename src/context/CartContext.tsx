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
import { CartItem } from '@/types/cart';
// import { getStoredCart, saveCart } from '@/utils/storage';

const CART_KEY = 'shopping-cart';
const CART_EVENT = 'cart-storage-change';

interface CartContextType {
    cart: CartItem[];
    isLoaded: boolean;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

function readCart(): CartItem[] {
    if (typeof window === 'undefined') return [];

    try {
        const data = localStorage.getItem(CART_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function writeCart(cart: CartItem[]) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event(CART_EVENT));
}

function subscribe(callback: () => void) {
    window.addEventListener(CART_EVENT, callback);
    window.addEventListener('storage', callback);

    return () => {
        window.removeEventListener(CART_EVENT, callback);
        window.removeEventListener('storage', callback);
    };
}

function getSnapshot() {
    return JSON.stringify(readCart());
}

function getServerSnapshot() {
    return JSON.stringify([]);
}

export function CartProvider({
    children,
}: {
    children: ReactNode;
}) {
    const cartSnapshot = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot,
    );

    const cart = useMemo<CartItem[]>(
        () => JSON.parse(cartSnapshot),
        [cartSnapshot]
    );

    const addToCart = useCallback((product: Product) => {
        const currentCart = readCart();
        const existing = currentCart.find((item) => item.id === product.id);

        if (existing) {
            const updatedCart = currentCart.map((item) => 
                item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            writeCart(updatedCart);
            return;
        }   

        writeCart([...currentCart, { ...product, quantity: 1 }]);
    }, []); 

    const removeFromCart = useCallback((id: number) => {
        writeCart(readCart().filter((item) => item.id !== id));
    }, []);

    const increaseQuantity = useCallback((id: number) => {
        const updatedCart = readCart().map((item) => 
            item.id === id 
                ? { ...item, quantity: item.quantity + 1}
                : item
            );

        writeCart(updatedCart);
    }, []);

    const decreaseQuantity = useCallback((id: number) => {
        const updatedCart = readCart()
            .map((item) => 
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0);

        writeCart(updatedCart);
    }, []);

    const value = useMemo(
        () => ({ 
            cart, 
            isLoaded: true,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
        }),
        [
            cart,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
        ]
    );

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used inside CartProvider');
    }

    return context;
}