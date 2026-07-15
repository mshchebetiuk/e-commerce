export default function Loading() {
    return (
        <main className="flex-min-h-screen items-center justify-center bg-linear-to-b from-white to-gray-100">
            <div className="flex flex-col items-center gap-5">
                <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

                <div className="space-y-1 text-center">
                    <h2 className="text-xl font-semibold">
                        Loading...
                    </h2>

                    <p className="text-sm text-gray-500">
                        Please wait a moment.
                    </p>
                </div>
            </div>
        </main>
    )
}