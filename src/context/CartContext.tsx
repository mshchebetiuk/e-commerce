'use client';

import { 
    createContext,
    useContext,
    useMemo,
    useState,
    ReactNode
} from 'react';
import { Product } from '@/types/product';
import { CartItem } from '@/types/cart';

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart(product: Product) {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) => 
                    item.id === product.id 
                        ? {
                            ...item, 
                            quantity: item.quantity + 1,
                        }
                        : item
                );
            }   

            return [
                ...prev, 
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    }   

    const value = useMemo(
        () => ({ cart, addToCart }),
        [cart]
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