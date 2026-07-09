import Link from 'next/link';

export function Header() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <Link href="/" className='text-xl font-bold text-gray-900'>
                    E-Commerce Store
                </Link>

                <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
                    <Link href='/products' className='hover:text-gray-900'>Products</Link>
                    <Link href='/favorites' className='hover:text-gray-900'>Favorites</Link>
                    <Link href='/cart' className='hover:text-gray-900'>Cart</Link>
                </nav>
            </div>
        </header>
    );
}