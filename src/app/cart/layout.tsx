import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Cart',
    description: 'Review products added to your shopping cart.',
};

export default function CartLayout({
    children,
}: Readonly<{
    children: React.ReactNode,
}>) {
    return children;
}