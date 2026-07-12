import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 text-6xl font-bold">
                404
            </h1>

            <p className="mb-8 text-gray-600">
                Page not found.
            </p>

            <Link
                href='/'
                className='rounded-lg bg-gray-900 px-6 py-3 text-white hover:bg-gray-700'
            >
                Go Home
            </Link>
        </main>
    )
}