import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
          <span className="mb-4 rounded-full bg-blue-100 px-4 py-2 text-sm-font-semibold text-blue-700">
            🚀 Built with Next.js 16 + TypeScript
          </span>

          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
            Modern 
            <span className="text-blue-600"> E-Commerce </span>
            Store
          </h1>

          <div className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Discover modern products with search, filters, shopping cart, 
            favorites, pagination and responsive design.
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className='rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700'
            >
              Browse Products
            </Link>

            <Link
              href="/favorites"
              className='rounded-xl border border-gray-300 px-8 py-4 text-lg font-semibold transition hover:bg-gray-100'
            >
              Favorites
            </Link>
          </div>

          <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="text-3xl font-bold text-blue-600">30+</h2>
              <p className="mt-2 text-gray-500">
                Products
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="text-3xl font-bold text-blue-600">10+</h2>
              <p className="mt-2 text-gray-500">
                Categories
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="text-3xl font-bold text-blue-600">
                Next.js
              </h2>
              <p className="mt-2 text-gray-500">
                App Router
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="text-3xl font-bold text-blue-600">
                100%
              </h2>
              <p className="mt-2 text-gray-500">
                TypeScript
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}