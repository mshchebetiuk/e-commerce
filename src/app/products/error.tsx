'use client';

interface ErrorProps {
    reset: () => void;
}

import { Button } from "@/components/ui/Button";

export default function Error({ reset }: ErrorProps) {
    return (
        <div className="py-20 text-center">
            <h2 className="text-3xl font-bold">
                Failed to load products
            </h2>

            <Button
                onClick={reset}
                className="mt-6"
            >
                Retry
            </Button>
        </div>
    );
}