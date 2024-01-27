import Link from 'next/link'
import { IconArrowUpRight } from '@tabler/icons-react'
import { motion, useInView } from 'framer-motion'
import { Icon } from '..'
import { useEffect, useRef } from 'react'

interface Page {
    setOnViewport: (value: number) => void
}

export default function Project({ setOnViewport }: Page) {

    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { amount: 0.5 })

    useEffect(() => {
        if (isInView) {
            setOnViewport(0)
        }
    }, [isInView])

    const projects = [
        {
            name: 'YoruLive',
            description:
                'Plataforma de streaming y reproducción de contenido multimedia.',
            status: 'paused',
            url: '/',
            icons: [Icon.DevelopingIcon, Icon.NextJsIcon],
        },
        {
            name: 'YoruBot',
            description:
                'El bot oficial del “yoruverso”. Para cualquier servidor de Discord.',
            status: 'paused',
            url: '/',
            icons: [Icon.DevelopingIcon, Icon.DiscordIcon],
        },
        {
            name: 'YoruGacha',
            description:
                'Gachapón y wiki de personajes de anime y manga. API pública.',
            status: 'paused',
            url: '/',
            icons: [Icon.PausedIcon, Icon.APIIcon, Icon.NextJsIcon],
        },
    ]

    return (
        <motion.main
            ref={ref}
            id='project'
            className='bg-page-1 flex min-h-dvh pt-28 flex-col items-center justify-center gap-24'
        >
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ amount: 'all' }}
                className='flex items-center sm:text-8xl text-5xl font-black uppercase text-white'
            >
                <p className='bg-gradient bg-clip-text text-transparent'>
                    Yoru
                </p>
                <p>verse</p>
            </motion.header>
            <motion.aside
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='flex flex-wrap justify-center gap-10'
            >
                {projects.map((content, i) => (
                    <motion.article
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ amount: 0.5 }}
                        key={i}
                        className='bg-gradient overflow-hidden rounded-xl p-1'
                    >
                        <section className='flex w-80 flex-col items-center justify-center gap-2.5 rounded-xl bg-zinc-900 p-2.5'>
                            <figure className='relative h-50 w-74 rounded-xl bg-zinc-700'></figure>
                            <footer className='flex w-full flex-col gap-5 p-2.5 text-zinc-400'>
                                <header className='flex flex-col gap-2.5'>
                                    <p className='text-xl font-medium text-white'>
                                        {content.name}
                                    </p>
                                    <article className='text-sm leading-5'>
                                        {content.description}
                                        <Link
                                            href={content.url}
                                            className='ml-1 inline-flex font-medium text-blue-400'
                                        >
                                            Saber más
                                            <IconArrowUpRight
                                                size={18}
                                                stroke={3}
                                            />
                                        </Link>
                                    </article>
                                </header>
                                <footer className='flex gap-2.5 text-xs not-italic text-white'>
                                    {content.icons.map((icon, i) => (
                                        <section key={i}>{icon()}</section>
                                    ))}
                                </footer>
                            </footer>
                        </section>
                    </motion.article>
                ))}
            </motion.aside>
        </motion.main >
    )
}
