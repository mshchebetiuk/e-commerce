import Link from 'next/link';

export default function Home() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Next.js Store
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Modern E-Commerce Store
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          A portfolio e-commerce project built with Next.js, TypeScript,
          Tailwind CSS and REST API.
        </p>

        <Link
          href="/products"
          className='inline-flex rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-700'
        >
          View Products
        </Link>
      </div>
    </section>
  )
}