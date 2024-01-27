import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
        <nav className='z-50 fixed w-full  flex items-center justify-center p-5'>
            <main className=' text-white bg-gradient/10 flex w-fit items-center justify-between sm:gap-10 gap-0 rounded-lg sm:px-5 px-2 py-2 sm:text-sm text-xs backdrop-blur-sm'>
                {links.map((link, i) => (
                    <Link
                        href={link.url}
                        className={`${link.active ? "text-white" : "text-zinc-400"} relative transition-all flex sm:w-32 w-28 items-center justify-center gap-2 truncate py-1.5`}
                        key={i}
                    >
                        {link.name}
                    </Link>
                ))}
            </main>
        </nav>
    )
}
