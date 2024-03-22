import MainTemplate from '@/components/MainTemplate'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Products Page',
    description: 'This is a Products Page',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <MainTemplate title='Products'>
                {children}
            </MainTemplate>
        </div>
    )
}