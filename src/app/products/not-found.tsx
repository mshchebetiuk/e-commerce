import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="py-20 text-center">
            <h2 className="text-4xl font-bold">
                Product Not Found
            </h2>

            <p className="mt-3 text-gray-500">
                The requested product does not exist.
            </p>

            <Link
                href='/products'
                className='mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white'
            >
                Back to Products
            </Link>
        </div>
    )
}