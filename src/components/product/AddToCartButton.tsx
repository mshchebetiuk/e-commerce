'use client';

import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { Button } from '../ui/Button';
import { toast } from 'sonner';

interface AddToCartButtonProps {
    product: Product;
}

export function AddToCartButton({
    product,
}: AddToCartButtonProps) {
    const { addToCart } = useCart();

    return (
        <Button
            onClick={() => { 
                addToCart(product);
                toast.success(`${product.title} added to cart`);
            }}
            className='w-full px-8 py-4 sm:w-auto'
        >
            Add to Cart
        </Button>
    );
}