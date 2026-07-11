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
        <article className="mb-4 rounded-lg border p-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>

            <p>${item.price}</p>

            <div className="mt-3 flex items-center gap-3">
                <button onClick={() => decreaseQuantity(item.id)}>
                    -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>
                    +
                </button>

                <button
                    onClick={() => removeFromCart(item.id)}
                    className='ml-auto text-red-600'
                >
                    Remove
                </button>
            </div>
        </article>
    );
}