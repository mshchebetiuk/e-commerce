import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-6xl font-bold">
                    404
                </h1>

                <p className="mb-4 text-gray-500">
                    Page not found.
                </p>

                <Link
                    href='/'
                    className='mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700'
                >
                    Back Home
                </Link>
            </div>
        </main>
    )
}