'use client';

import { CartItem as CartItemType } from '@/types/cart';
import { Button } from '../ui/Button';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

interface Props {
    item: CartItemType;
}

export function CartItem({ item }: Props) {
    const {
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    const totalPrice = (item.price * item.quantity).toFixed(2);

    return (
        <article className="mb-4 grid gap-4 rounded-xl border bg-white p-4 shadow-sm md:grid-cols-[120px_1fr]">
            <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-xl bg-gray-100">
                <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill 
                    className='object-cover transition-transform duration-300 hover:scale-105'
                    sizes='128px'
                />
            </div>

            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold">
                        {item.title}
                    </h2>

                    <p className="text-sm text-gray-500">
                        Brand: {item.brand}
                    </p>

                    <p className="text-sm capitalize text-gray-500">
                        Category: {item.category}
                    </p>

                    <span className="mt-3 text-2xl font-bold text-blue-600">
                        ${item.price}
                    </span>

                    <p className="mt-1 font-semibold text-gray-700">
                        Total: ${totalPrice}
                    </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Button 
                        onClick={() => decreaseQuantity(item.id)}
                        variant='secondary'
                        className='h-10 w-10 rounded-lg border p-0'
                    >
                        -
                    </Button>

                    <span className='min-w-8 text-center font-semibold'>
                        {item.quantity}
                    </span>

                    <Button 
                        onClick={() => increaseQuantity(item.id)}
                        variant='secondary'
                        className='h-10 w-10 rounded-lg border p-0'    
                    >
                        +
                    </Button>

                    <Button
                        onClick={() => removeFromCart(item.id)}
                        variant='danger'
                        className='ml-auto'
                    >
                        Remove
                    </Button>
                </div>
            </div>
        </article>
    );
}