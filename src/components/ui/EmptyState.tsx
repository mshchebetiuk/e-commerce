import Link from 'next/link';

interface EmptyStateProps {
    icon: string;
    title: string;
    description: string;
    actionText: string;
    actionHref: string;
}

export function EmptyState({
    icon, 
    title,
    description,
    actionText,
    actionHref,
}: EmptyStateProps) {
    return (
        <div className="mx-auto flex max-w-md flex-col items-center justify-center rounded-3xl border bg-white px-4 py-14 text-center shadow-sm">
            <div className="mt-6 text-6xl">{icon}</div>

            <h2 className="text-2xl font-bold text-gray-900">
                {title}
            </h2>

            <p className="mt-3 text-gray-500">{description}</p>

            <Link
                href={actionHref}
                className='mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700'
            >
                {actionText}
            </Link>
        </div>
    )
}