'use client';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({
    error,
    reset,
}: ErrorProps) {
    return (
        <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold">
                Something went wrong 😢
            </h1>

            <p className="mb-8 text-gray-600">
                An unexpected error occurred.
            </p>

            <button
                onClick={reset}
                className="rounded-lg bg-gray-900 px-6 py-3 text-white hover:bg-gray-700"
            >
                Try again
            </button>
        </main>
    )
}