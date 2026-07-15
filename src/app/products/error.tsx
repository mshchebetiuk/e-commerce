'use client';

interface ErrorProps {
    reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
    return (
        <div className="py-20 text-center">
            <h2 className="text-3xl font-bold">
                Failed to load products
            </h2>

            <button
                onClick={reset}
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white"
            >
                Retry
            </button>
        </div>
    );
}