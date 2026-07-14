'use client';

import Link from 'next/link';
import { ShoppingCart, Heart, Store, Menu, X } from 'lucide-react';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    className='hidden flex itesm-center gap-2 text-xl font-bold md:flex'
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

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='rounded-lg p-2 transition hover:bg-gray-100 md:hidden'
                    aria-label='Toggle menu'
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="border-t bg-white md:hidden">
                    <nav className="flex flex-col p-4">
                        <Link
                            href='/products'
                            onClick={() => setIsMenuOpen(false)}
                            className='rounded-lg px-4 py-3 hover:bg-gray-100'
                        >
                            Products
                        </Link>
                        
                        <Link
                            href='/favorites'
                            onClick={() => setIsMenuOpen(false)}
                            className='rounded-lg px-4 py-3 hover:bg-gray-100'
                        >
                            Favorites ({favorites.length})
                        </Link>

                        <Link
                            href='/products'
                            onClick={() => setIsMenuOpen(false)}
                            className='rounded-lg px-4 py-3 hover:bg-gray-100'
                        >
                            Cart ({totalItems})
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}