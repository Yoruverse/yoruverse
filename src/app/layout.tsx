import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Yoruverse',
    description: 'Bienvenido a Yoruverse, el un universo de aplicaciones',
    keywords: [
        'Yoruverse',
        'NextJS',
        'React',
        'TypeScript',
        'TailwindCSS',
        'FramerMotion',
        'Vercel',
        'Yoru',
        'Apps',
        'Aplicaciones',
        'Streaming',
        'Discord',
        'Bot',
        'API',
        'Gacha',
        'Wiki',
        'Develop',
    ],
    authors: [{ name: 'Jotis', url: 'https://github.com/Jotis1' }],
    creator: 'Jotis',
    publisher: 'Jotis',
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    category: 'technology',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`bg-zinc-950 ${rubik.className}`}>{children}</body>
        </html>
    )
}
