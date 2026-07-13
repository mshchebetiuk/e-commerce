'use client';

import Link from 'next/link';
import { ShoppingCart, Heart, Store } from 'lucide-react';

import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';

export function Header() {
    const { cart } = useCart();
    const { favorites } = useFavorites();

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <Link 
                    href="/" 
                    className='flex itesm-center gap-2 text-xl font-bold'
                >
                    <Store size={28} />
                    <span>E-Commerce</span>
                </Link>

                <nav className="flex items-center gap-6">
                    <Link 
                        href='/products' 
                        className='transition hover:text-blue-600'
                    >
                        Products
                    </Link>

                    <Link 
                        href='/favorites' 
                        className='flex items-center gap-2 transition hover:text-red-500'
                    >
                        <Heart size={20} />
                        <span>({favorites.length})</span>
                    </Link>

                    <Link 
                        href='/cart' 
                        className='flex items-center gap-2 transition hover:text-green-600'
                    >
                        <ShoppingCart size={20} />
                        <span>({totalItems})</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}