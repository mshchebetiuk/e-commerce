'use client';

import { CartItem as CartItemType } from '@/types/cart';
import { useCart } from '@/context/CartContext';

interface Props {
    item: CartItemType;
}

export function CartItem({ item }: Props) {
    const {
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    return (
        <article className="mb-4 rounded-xl border p-4 shadow-sm">
            <h2 className="text-lg font-semibold">{item.title}</h2>

            <p>${item.price}</p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
                <button onClick={() => decreaseQuantity(item.id)}>
                    -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>
                    +
                </button>

                <button
                    onClick={() => removeFromCart(item.id)}
                    className='ml-auto rounded-lg px-4 py-2 text-red-600 transition hover:bg-red-50'
                >
                    Remove
                </button>
            </div>
        </article>
    );
}