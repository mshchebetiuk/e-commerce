import { Spinner } from '@/components/ui/Spinner';

export default function Loading() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <Spinner size="lg" />

            <p className="text-lg font-medium text-gray-600">
                Loading...
            </p>
        </div>
    )
}