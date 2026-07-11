'use client';

import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

interface AddToCartButtonProps {
    product: Product;
}

export function AddToCartButton({
    product,
}: AddToCartButtonProps) {
    const { addToCart } = useCart();

    return (
        <button
            onClick={() => addToCart(product)}
            className='rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700'
        >
            Add to Cart
        </button>
    );
}