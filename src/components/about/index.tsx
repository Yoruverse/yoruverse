import { IconInfoSquareFilled } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import * as CustomLink from './link'
import Image from 'next/image'

export default function About() {
    const members = [
        {
            name: 'Jotis',
            image: '/jotisPP.png',
        },
        {
            name: 'Rei',
            image: '/reiPP.png',
        },
        {
            name: 'Shir0',
            image: '/shiroPP.png',
        },
    ]

    return (
        <main
            id='about'
            className='bg-page-2 flex h-dvh flex-col items-center justify-center gap-20'
        >
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ amount: 'all' }}
                className='py-20 text-5xl font-extrabold text-white'
            >
                <span className='bg-gradient bg-clip-text text-transparent'>
                    ¿Quiénes
                </span>{' '}
                somos?
            </motion.h1>
            <motion.section
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ amount: 'all' }}
                className='flex items-center gap-10'
            >
                <aside className='flex w-100 flex-col justify-center gap-5 text-white'>
                    <header className='flex items-center gap-2.5 text-zinc-400'>
                        <IconInfoSquareFilled size={18} />
                        Sobre nosotros
                    </header>
                    <p>
                        Solo somos un grupo de chavales españoles con ganas de
                        hacer las{' '}
                        <span className='font-bold text-blue-400'>
                            cosas bien
                        </span>{' '}
                        y aportar a esta comunidad.
                    </p>
                    <p>
                        Nuestra meta es{' '}
                        <span className='font-bold text-purple-400'>
                            crear aplicaciones
                        </span>{' '}
                        alternativas para aquellos que no se conforman con
                        cualquier cosa.
                    </p>
                    <p>
                        <span className='font-bold text-rose-400'>
                            Valoramos tu privacidad
                        </span>
                        , no te pediremos datos personales en ninguno de
                        nuestros servicios.
                    </p>
                </aside>
                <aside className='flex justify-center gap-10'>
                    {members.map((member, i) => (
                        <motion.article
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            key={i}
                            className='bg-gradient rounded-xl p-1'
                        >
                            <section className='flex flex-col items-center justify-center rounded-xl bg-zinc-900 p-2.5'>
                                <figure className='relative size-36 overflow-hidden rounded-xl bg-zinc-700'>
                                    <Image
                                        src={member.image}
                                        className='object-fit'
                                        fill
                                        alt={`${member.name} profile picture`}
                                    ></Image>
                                </figure>
                                <footer className='flex flex-col items-center justify-center gap-5 py-2.5'>
                                    <p className='text-white'>{member.name}</p>
                                    <section className='flex gap-5'>
                                        <CustomLink.Discord href='/'></CustomLink.Discord>
                                        <CustomLink.Twitch href='/'></CustomLink.Twitch>
                                        <CustomLink.Youtube href='/'></CustomLink.Youtube>
                                    </section>
                                </footer>
                            </section>
                        </motion.article>
                    ))}
                </aside>
            </motion.section>
        </main>
    )
}
