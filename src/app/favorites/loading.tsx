export default function Loading() {
    return (
        <div className="py-20 text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            
            <div className="mt-4 text-gray-500">
                Loading favorites...
            </div>
        </div>
    )
}