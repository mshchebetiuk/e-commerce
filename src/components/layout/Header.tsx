'use client';

import Link from 'next/link';
import { ShoppingCart, Heart, Store, Menu, X } from 'lucide-react';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(
    () => import('@/components/ThemeToggle').then((mod) => mod.ThemeToggle), 
    {
        ssr: false,
    }
);

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { cart } = useCart();
    const { favorites } = useFavorites();

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur transition-colors dark:border-gray-700 dark:bg-gray-900/80">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <Link 
                    href="/"
                    className='hidden items-center gap-2 text-xl font-bold transition-colors md:flex dark:text-white'
                >
                    <Store size={28} />
                    <span>E-Commerce</span>
                </Link>

                <nav className="flex items-center gap-6">
                    <Link 
                        href='/products' 
                        className='transition-colors hover:text-blue-600 dark:text-gray-200'
                    >
                        Products
                    </Link>

                    <Link 
                        href='/favorites' 
                        className='flex items-center gap-2 transition-colors hover:text-red-500 dark:text-gray-200'
                    >
                        <Heart size={20} />
                        <span>({favorites.length})</span>
                    </Link>

                    <Link 
                        href='/cart' 
                        className='flex items-center gap-2 transition-colors hover:text-green-600 dark:text-gray-200'
                    >
                        <ShoppingCart size={20} />
                        <span>({totalItems})</span>
                    </Link>

                    <ThemeToggle />
                </nav>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden dark:text-white dark:hover:bg-gray-800'
                    aria-label='Toggle menu'
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="border-t border-gray-200 bg-white md:hidden dark:border-gray-700 dark:bg-gray-900">
                    <nav className="flex flex-col p-4">
                        <Link
                            href='/products'
                            onClick={() => setIsMenuOpen(false)}
                            className='rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                        >
                            Products
                        </Link>
                        
                        <Link
                            href='/favorites'
                            onClick={() => setIsMenuOpen(false)}
                            className='rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                        >
                            Favorites ({favorites.length})
                        </Link>

                        <Link
                            href='/cart'
                            onClick={() => setIsMenuOpen(false)}
                            className='rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                        >
                            Cart ({totalItems})
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}