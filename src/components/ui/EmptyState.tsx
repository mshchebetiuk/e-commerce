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
        <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center rounded-3xl border bg-white px-6 py-10 text-center shadow-sm sm:px-8 sm:py-14">
            <div className="mt-5 text-5xl sm:text-6xl">{icon}</div>

            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {title}
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500 sm:text-base">{description}</p>

            <Link
                href={actionHref}
                className='mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700 sm:w-auto'
            >
                {actionText}
            </Link>
        </div>
    )
}