import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Favorites',
    description: 'View and manage your favorite products.',
};

export default function FavoritesLayout({
    children,
}: Readonly<{
    children: React.ReactNode,
}>) {
    return children;
}