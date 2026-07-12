export function SkeletonCard() {
    return (
        <div className="animate-pulse rounded-xl border bg-white p-4">
            <div className="mb-4 h-48 rounded-lg bg-gray-200" />
            <div className="mb-3 h-6 w-3/4 rounded bg-gray-200" />
            <div className="mb-2 h-4 rounded bg-gray-200" />
            <div className="mb-6 h-4 w-5/6 rounded bg-gray-200" />

            <div className="flex justify-between">
                <div className="h-6 w-20 rounded bg-gray-200" />
                <div className="h-6 w-12 rounded bg-gray-200" />
            </div>
        </div>
    )
}