export default function Loading() {
    return (
        <main className="mx-auto max-w-7xl px-4 py-10 animate-pulse">
            <div className="grid gap-10 md:grid-cols-2">
                <div className="aspect-square rounded-xl bg-gray-200" />

                <div>
                    <div className="mb-6 h-10 w-2/3 rounded bg-gray-200" />
                    
                    <div className="mb-3 h-5 rounded bg-gray-200" />
                    <div className="mb-3 h-5 rounded bg-gray-200" />
                    <div className="mb-8 h-5 w-3/4 rounded bg-gray-200" />

                    <div className="h-12 h-4 rounded bg-gray-300" />
                </div>
            </div>
        </main>
    )
}