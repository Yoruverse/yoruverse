import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface Navigation {
    onViewport?: number
}

export default function Navigation({ onViewport }: Navigation) {
    const links = [
        {
            name: 'Proyectos',
            url: '/#project',
            active: onViewport === 0,
        },
        {
            name: 'Quiénes somos',
            url: '/#about',
            active: onViewport === 1,
        },
        {
            name: 'Apóyanos',
            url: '/#support',
            active: onViewport === 2,
        },
    ]

    return (
        <nav className='fixed z-50 flex  w-full items-center justify-center p-5'>
            <main className=' bg-gradient/10 flex w-fit items-center justify-between gap-0 rounded-lg px-2 py-2 text-xs text-white backdrop-blur-sm sm:gap-10 sm:px-5 sm:text-sm'>
                {links.map((link, i) => (
                    <Link
                        href={link.url}
                        className={`${link.active ? 'text-white' : 'text-zinc-400'} relative flex w-28 items-center justify-center gap-2 truncate py-1.5 transition-all sm:w-32`}
                        key={i}
                    >
                        {link.name}
                    </Link>
                ))}
            </main>
        </nav>
    )
}
