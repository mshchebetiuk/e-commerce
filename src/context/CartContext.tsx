'use client';

import { 
    createContext,
    useContext,
    useMemo,
    useState,
    useEffect,
    ReactNode
} from 'react';

import { Product } from '@/types/product';
import { CartItem } from '@/types/cart';
import { getStoredCart, saveCart } from '@/utils/storage';

interface CartContextType {
    cart: CartItem[];
    isLoaded: boolean;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        if (!isLoaded) return;
        saveCart(cart);
    }, [cart, isLoaded]);

    useEffect(() => {
        setCart(getStoredCart());
        setIsLoaded(true);
    }, []);

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

    function removeFromCart(id: number) {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }

    function increaseQuantity(id: number) {
        setCart((prev) => 
            prev.map((item) => 
                item.id === id 
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }

    function decreaseQuantity(id: number) {
        setCart((prev) => 
            prev
                .map((item) => 
                    item.id === id 
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    }

    const value = useMemo(
        () => ({ 
            cart, 
            isLoaded,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
        }),
        [cart, isLoaded]
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