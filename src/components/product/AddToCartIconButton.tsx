'use client';

import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

interface Props {
    product: Product;
}

export function AddToCartIconButton({ product }: Props) {
    const { addToCart } = useCart();

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                addToCart(product);
                toast.success(`${product.title} added to cart`);
            }}
            className='rounded-full bg-blue-600 p-3 text-white transition cursor-pointer hover:bg-blue-700'
            aria-label='Add to cart'
        >
            <ShoppingCart size={18} />
        </button>
    )
}