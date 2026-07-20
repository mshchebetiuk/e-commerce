'use client';

import { Button } from "@/components/ui/Button";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({
    reset,
}: ErrorProps) {
    return (
        <main className="flex min-h-screen items center justify-center bg-gray-50">
            <div className="max-w-md text-center">  
                <h1 className="text-4xl font-bold">
                    Something went wrong 😢
                </h1>

                <p className="mb-4 text-gray-500">
                    An unexpected error occurred.
                </p>

                <Button
                    onClick={reset}
                    className="mt-8 px-6 py-3"
                >
                    Try Again
                </Button>
            </div>
        </main>
    )
}