import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface Page {
    setOnViewport: (value: number) => void
}

export default function Support({ setOnViewport }: Page) {

    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { amount: 0.5 })

    useEffect(() => {
        if (isInView) {
            setOnViewport(2)
        }
    }, [isInView]);

    const rewards = [
        {
            name: 'YoruLive',
            type: 'PRO',
            time: '3 meses',
        },
        {
            name: 'YoruBot',
            type: 'PRO',
            time: 'Para siempre',
        },
        {
            name: 'YoruGacha',
            type: 'PRO',
            time: '3 meses',
        },
    ]

    return (
        <motion.main
            ref={ref}
            id='support'
            className='bg-page-3 flex min-h-dvh flex-col items-center justify-center gap-32'
        >
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ amount: 'all', once: true }}
                className='flex flex-col items-center justify-center gap-12'
            >
                <p className='bg-gradient bg-clip-text text-4xl font-black text-transparent'>
                    Apóyanos
                </p>
                <p className='w-100 text-center text-white'>
                    Puedes ayudarnos con una donación de cualquier tipo,
                    nosotros de lo recompensaremos.
                </p>
                <section className='flex items-center justify-center gap-10 rounded-xl bg-zinc-900 p-2.5'>
                    <motion.section
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link
                            className='flex size-20 flex-col items-center justify-center gap-2.5 rounded-xl bg-[#F96854] text-sm font-medium text-white'
                            href={`/`}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 36 40'
                                className='logomark size-5'
                            >
                                <path
                                    fill='#fff'
                                    d='M35.975 11.392c0 .312.021.627-.004.937-.03.361-.082.722-.149 1.08a22.535 22.535 0 0 1-.331 1.512 8.59 8.59 0 0 1-.359 1.084c-.313.767-.66 1.518-1.117 2.21-.282.427-.57.849-.864 1.266a4.12 4.12 0 0 1-.37.431c-.225.238-.442.483-.686.695a13.5 13.5 0 0 1-1.123.905c-.356.25-.756.431-1.12.674-.404.268-.866.384-1.296.587-.384.18-.795.24-1.186.38-.498.18-1.021.222-1.531.331-.544.117-1.097.203-1.643.315-.449.09-.894.198-1.34.298-.254.056-.51.098-.756.173-.304.093-.6.214-.896.324-.201.072-.412.126-.604.219-.28.14-.544.315-.823.464-.457.242-.838.585-1.184.96-.292.32-.546.681-.8 1.036-.418.587-.706 1.244-.964 1.916-.254.657-.487 1.322-.725 1.986-.221.625-.43 1.252-.655 1.875-.197.543-.407 1.079-.618 1.615a13.447 13.447 0 0 1-1.12 2.215c-.331.531-.685 1.049-1.142 1.478-.366.343-.72.704-1.17.944-.446.24-.906.448-1.4.557a6.636 6.636 0 0 1-1.807.129c-.229-.012-.455-.075-.684-.117-.137-.026-.276-.047-.409-.089-.112-.035-.215-.097-.322-.151-.302-.147-.624-.264-.9-.448a8.802 8.802 0 0 1-.96-.776c-.554-.492-.97-1.103-1.342-1.74a13.04 13.04 0 0 1-.681-1.319c-.192-.436-.336-.893-.492-1.345a24.916 24.916 0 0 1-.34-1.063c-.092-.317-.165-.641-.243-.963-.073-.298-.15-.594-.212-.895-.112-.536-.215-1.073-.32-1.609a35.827 35.827 0 0 1-.133-.68c-.06-.34-.114-.681-.171-1.022-.044-.254-.092-.506-.13-.76-.044-.28-.08-.56-.124-.839-.036-.242-.078-.483-.112-.725-.032-.226-.06-.452-.089-.678a70.143 70.143 0 0 1-.094-.73c-.03-.236-.055-.471-.082-.707a19421 19421 0 0 1-.096-.818c-.011-.098-.023-.193-.03-.291-.034-.401-.068-.804-.1-1.208-.02-.25-.04-.501-.05-.75-.021-.39-.042-.777-.05-1.166C.01 18.46.001 17.819 0 17.18c0-.378.002-.755.027-1.13.026-.392.08-.784.122-1.176.034-.312.064-.622.105-.934.023-.175.064-.348.1-.52.092-.432.176-.863.281-1.292.076-.31.181-.61.266-.916.157-.571.393-1.11.623-1.653.106-.25.236-.49.368-.725.186-.329.366-.66.576-.97.259-.378.533-.744.823-1.098.275-.336.567-.66.873-.965.24-.24.512-.448.77-.665.254-.212.501-.433.77-.624.412-.296.835-.576 1.263-.849.249-.158.514-.294.774-.434.405-.219.81-.44 1.22-.648.26-.13.527-.244.794-.354.683-.277 1.364-.557 2.055-.816.46-.17.932-.303 1.399-.452.24-.077.475-.161.717-.229.2-.056.402-.086.604-.133.22-.05.434-.119.656-.16.299-.059.603-.1.907-.147.34-.052.679-.105 1.02-.152.139-.019.283-.02.425-.03.47-.026.944-.054 1.414-.077.188-.01.382-.051.565-.019.443.08.889.017 1.332.05.428.03.853.076 1.278.127.306.038.608.103.914.15.268.04.535.065.802.107.215.035.43.081.645.128.46.103.919.196 1.374.317.404.11.797.275 1.204.37.469.113.899.332 1.351.479.462.149.86.424 1.3.608.515.217.96.546 1.418.858.347.238.685.492 1 .77.467.41.92.836 1.356 1.28.258.26.478.564.713.85.38.464.658.993.928 1.523.215.424.393.874.537 1.329.12.373.156.774.245 1.156.098.42.096.844.073 1.27l-.012.008Z'
                                ></path>
                            </svg>
                            <p>Patreon</p>
                        </Link>
                    </motion.section>
                    <motion.section
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link
                            className='flex size-20 flex-col items-center justify-center gap-2.5 rounded-xl bg-white text-sm font-medium text-zinc-950'
                            href={`/`}
                        >
                            <svg
                                version='1.1'
                                className='size-5'
                                id='Icons'
                                xmlns='http://www.w3.org/2000/svg'
                                xmlnsXlink='http://www.w3.org/1999/xlink'
                                viewBox='0 0 32 32'
                                xmlSpace='preserve'
                            >
                                <g>
                                    <path
                                        d='M12,26H7c-0.8,0-1.6-0.4-2.1-1c-0.5-0.6-0.7-1.4-0.5-2.2L8.7,4l0,0c0.3-1.2,1.3-2,2.6-2h8.6c2.3,0,4.4,1,5.9,2.8
		c1.4,1.8,2,4.1,1.5,6.4c-0.8,4-4.4,6.8-8.5,6.8h-3.2c-0.5,0-1,0.4-1.1,0.9L13,25.2C12.9,25.7,12.5,26,12,26z'
                                    />
                                </g>
                                <g>
                                    <g>
                                        <path
                                            fill='#01308A'
                                            d='M12,26H7c-0.8,0-1.6-0.4-2.1-1c-0.5-0.6-0.7-1.4-0.5-2.2L8.7,4l0,0c0.3-1.2,1.3-2,2.6-2h8.6
			c2.3,0,4.4,1,5.9,2.8c1.4,1.8,2,4.1,1.5,6.4c-0.8,4-4.4,6.8-8.5,6.8h-3.2c-0.5,0-1,0.4-1.1,0.9L13,25.2C12.9,25.7,12.5,26,12,26z'
                                        />
                                    </g>
                                </g>
                                <path
                                    fill='#019CDE'
                                    d='M29.3,11.3c0,0.1,0,0.2,0,0.3c-1,4.9-5.4,8.4-10.4,8.4h-2.5l-1.4,5.7C14.6,27.1,13.4,28,12,28h-2
	c0.1,0.4,0.2,0.7,0.5,1c0.5,0.6,1.2,0.9,2,0.9H17c0.5,0,0.9-0.3,1-0.7l1.4-5.5c0.1-0.4,0.5-0.6,0.9-0.6h2.9c3.7,0,7-2.5,7.7-6
	C31.3,15,30.7,12.8,29.3,11.3z'
                                />
                            </svg>
                            <p>PayPal</p>
                        </Link>
                    </motion.section>
                </section>
            </motion.header>
            <motion.footer
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ amount: 'all', once: true }}
                className='flex flex-col justify-center gap-7'
            >
                <p className='text-center text-white'>Recompensas</p>
                <section className='bg-gradient rounded-xl p-1'>
                    <section className='flex flex-col items-center justify-center rounded-xl bg-zinc-900 p-2.5'>
                        {rewards.map((reward, i) => (
                            <article
                                key={i}
                                className='flex w-full items-center gap-2.5 p-2.5'
                            >
                                <section className='flex size-6 items-center justify-center rounded bg-zinc-950 text-zinc-400'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='18'
                                        height='18'
                                        viewBox='0 0 21 21'
                                        fill='none'
                                    >
                                        <g clipPath='url(#clip0_12_28)'>
                                            <path
                                                d='M15.5 3.83325C15.6255 3.83325 15.7493 3.86158 15.8623 3.91613C15.9753 3.97067 16.0745 4.05002 16.1525 4.14825L16.2142 4.23825L18.7142 8.40492C18.796 8.54155 18.837 8.69878 18.8323 8.85799C18.8276 9.0172 18.7773 9.17172 18.6875 9.30325L18.6208 9.38908L11.5125 17.3333C11.3805 17.4679 11.223 17.5749 11.0491 17.6478C10.8752 17.7208 10.6886 17.7584 10.5 17.7583C10.1667 17.7583 9.84584 17.6416 9.575 17.4108L9.4625 17.3058L2.37917 9.38908C2.27261 9.27018 2.20244 9.12317 2.17703 8.96553C2.15162 8.8079 2.17203 8.64629 2.23584 8.49992L2.28584 8.40408L4.79667 4.21909L4.85 4.14409C4.88815 4.09664 4.93147 4.05359 4.97917 4.01575L5.05334 3.96242L5.12667 3.92075L5.16834 3.90159L5.21834 3.88075L5.30917 3.85409L5.4025 3.83742L5.5 3.83325H15.5ZM8.095 7.11909C7.90556 7.00564 7.67883 6.97202 7.46461 7.02561C7.2504 7.0792 7.06621 7.21563 6.9525 7.40492L6.4525 8.23825L6.4025 8.33492C6.33872 8.48199 6.31871 8.64433 6.34487 8.80248C6.37104 8.96064 6.44226 9.10789 6.55 9.22659L8.21667 11.0599L8.29167 11.1333C8.44593 11.2653 8.64307 11.3364 8.84607 11.3333C9.04907 11.3303 9.24397 11.2532 9.39417 11.1166L9.46667 11.0416C9.59867 10.8873 9.66982 10.6902 9.66675 10.4872C9.66368 10.2842 9.58661 10.0893 9.45 9.93909L8.19917 8.56409L8.38084 8.26159L8.42667 8.17575C8.51041 7.98957 8.5229 7.77913 8.46176 7.58435C8.40063 7.38957 8.27012 7.22401 8.095 7.11909Z'
                                                fill='url(#paint0_linear_12_28)'
                                            />
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id='paint0_linear_12_28'
                                                x1='4.81818'
                                                y1='3.90905'
                                                x2='18.6818'
                                                y2='17.5454'
                                                gradientUnits='userSpaceOnUse'
                                            >
                                                <stop stopColor='#F43F5E' />
                                                <stop
                                                    offset='0.5'
                                                    stopColor='#9146FF'
                                                />
                                                <stop
                                                    offset='1'
                                                    stopColor='#3B82F6'
                                                />
                                            </linearGradient>
                                            <clipPath id='clip0_12_28'>
                                                <rect
                                                    width='20'
                                                    height='20'
                                                    fill='white'
                                                    transform='translate(0.5 0.5)'
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </section>
                                <aside className='flex h-14 grow flex-col justify-center gap-1'>
                                    <header className='flex items-center gap-2.5'>
                                        <p className='font-medium text-white'>
                                            {reward.name}
                                        </p>
                                        <span className='rounded bg-yellow-200 px-1 py-0.5 text-xs font-bold text-zinc-950'>
                                            {reward.type}
                                        </span>
                                    </header>
                                    <p className='text-sm text-zinc-400'>
                                        {reward.time}
                                    </p>
                                </aside>
                            </article>
                        ))}
                    </section>
                </section>
            </motion.footer>
        </motion.main>
    )
}
