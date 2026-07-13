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
            className='rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 hover:scale-105'
        >
            Add to Cart
        </button>
    );
}