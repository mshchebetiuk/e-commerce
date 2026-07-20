'use client';

import { CartItem } from '@/components/cart/CartItem';
import { useCart } from '@/context/CartContext';
import { EmptyState } from '@/components/ui/EmptyState';
import { CartSummary } from '@/components/cart/CartSummary';

export default function CartPage() {
    const { cart } = useCart();

    // const total = cart.reduce(
    //     (sum, item) => sum + item.price * item.quantity, 0
    // );

    return (
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="mb-6 text-3xl font-bold transition-colors sm:text-4xl dark:text-white">
                Shopping Cart
            </h1>

            <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
                <div>
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

                            {/* <div className="mt-8 text-center text-2xl font-bold sm:text-right sm:text-3xl">
                                Total: ${total.toFixed(2)}
                            </div> */}
                        </>
                    )}
                </div>

                <CartSummary />
            </div>
        </main>
    );
}