import MainTemplate from '@/components/MainTemplate'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Profile Page',
    description: 'This is a Profile Page',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <MainTemplate title='Profile'>
                {children}
            </MainTemplate>
        </div>
    )
}

