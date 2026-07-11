import { CartItem } from '@/types/cart';

const CART_KEY = 'shopping-cart';

export function getStoredCart(): CartItem[] {
    if (typeof window === 'undefined') {
        return [];
    }

    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveCart(cart: CartItem[]) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}