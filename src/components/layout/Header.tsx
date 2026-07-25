'use client';

import Link from 'next/link';
import { 
    ShoppingCart, 
    Heart, 
    Store, 
    Menu, 
    X 
} from 'lucide-react';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';

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
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4">
                <Link 
                    href="/"
                    className='flex shirk-0 items-center gap-2 font-bold transition-colors dark:text-white'
                >
                    <Store size={24} />

                    <span className=''>
                        E-Commerce
                    </span>
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
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

                <div className="flex items-center gap-1 md:hidden">
                    <Link
                        href='/cart'
                        className='flex items-center gap-1 rounded-lg p-2 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                        aria-label={`Shopping cart with ${totalItems} items`}
                    >
                        <ShoppingCart size={21} />
                        <span className="text-sm">({totalItems})</span>
                    </Link>

                    <button
                        type='button'
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className='cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800'
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
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
                            <span>Favorires</span>{' '}
                            <span>({favorites.length})</span>
                        </Link>

                        <Link
                            href='/cart'
                            onClick={() => setIsMenuOpen(false)}
                            className='rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                        >
                            <span>Cart</span>{' '}
                            <span>({totalItems})</span>
                        </Link>

                        <div className="mt-2 flex items-center justify-between border-t border-gray-200 px-4 pt-3 dark:border-gray-700">
                            <span className="dark:text-gray-200">
                                Theme
                            </span>

                            <ThemeToggle />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}