import MainTemplate from '@/components/MainTemplate'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'FAQ Page',
    description: 'This is a FAQ Page',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <MainTemplate title='FAQ'>
                {children}
            </MainTemplate>
        </div>
    )
}