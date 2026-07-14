'use client';

import { CartItem } from '@/components/cart/CartItem';
import { useCart } from '@/context/CartContext';
import { EmptyState } from '@/components/ui/EmptyState';

export default function CartPage() {
    const { cart } = useCart();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    return (
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="mb-6 text-3xl font-bold sm:text-4xl">
                Shopping Cart
            </h1>

            {cart.length === 0 ? (
                <EmptyState 
                    icon='🛒'
                    title='Your cart is empty'
                    description="Looks like you haven't added any products yet."
                    actionText='Browse Products'
                    actionHref='/products'
                />
            ) : (
                <>
                    {cart.map((item) => (
                        <CartItem 
                            key={item.id}
                            item={item}
                        />
                    ))}

                    <div className="mt-8 text-center text-2xl font-bold sm:text-right sm:text-3xl">
                        Total: ${total.toFixed(2)}
                    </div>
                </>
            )}
        </main>
    );
}