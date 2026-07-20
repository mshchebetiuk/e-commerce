'use client';

import Link from 'next/link';

import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/formatPrice';

export function CartSummary() {
    const { cart } = useCart();

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    const shipping = subtotal > 0 ? 15 : 0;
    const total = subtotal + shipping; 

    return (
        <aside className="rounded-2xl border-bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">
                Order Summary
            </h2>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                        Subtotal
                    </span>

                    <span className="font-semibold">
                        {formatPrice(subtotal)}
                    </span>
                </div>


                <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                        Shipping
                    </span>

                    <span className="font-semibold">
                        {formatPrice(shipping)}
                    </span>
                </div>

                <hr />

                <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                </div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Checkout
            </button>

            <Link
                href='/products'
                className='mt-3 block text-center text-sm text-blue-600 hover:underline'
            >
                Continue Shopping
            </Link>
        </aside>
    )
}