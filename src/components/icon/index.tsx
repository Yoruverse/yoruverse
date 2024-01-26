import { IconCode, IconPlayerPauseFilled, IconApi } from '@tabler/icons-react'

function DevelopingIcon() {
    return (
        <section className='flex items-center gap-2 rounded-lg bg-zinc-800 px-2.5 py-1.5'>
            <IconCode size={18} className='text-yellow-200' />
            <p>En desarrollo</p>
        </section>
    )
}

function PausedIcon() {
    return (
        <section className='flex items-center gap-2 rounded-lg bg-zinc-800 px-2.5 py-1.5'>
            <IconPlayerPauseFilled size={18} className='text-red-400' />
            <p>Pausado</p>
        </section>
    )
}

function APIIcon() {
    return (
        <section className='flex items-center gap-2 rounded-lg bg-zinc-800 px-2.5 py-1.5'>
            <IconApi size={18} className='text-blue-400' />
            <p>API</p>
        </section>
    )
}

function NextJsIcon() {
    return (
        <section className='flex items-center gap-2 rounded-lg bg-zinc-800 px-2.5 py-1.5'>
            <svg
                viewBox='0 0 256 256'
                xmlns='http://www.w3.org/2000/svg'
                className='h-[18px]'
                preserveAspectRatio='xMidYMid'
            >
                <defs>
                    <linearGradient
                        id='c'
                        x1='55.633%'
                        x2='83.228%'
                        y1='56.385%'
                        y2='96.08%'
                    >
                        <stop offset='0%' stopColor='#FFF' />
                        <stop offset='100%' stopColor='#FFF' stopOpacity='0' />
                    </linearGradient>
                    <linearGradient
                        id='d'
                        x1='50%'
                        x2='49.953%'
                        y1='0%'
                        y2='73.438%'
                    >
                        <stop offset='0%' stopColor='#FFF' />
                        <stop offset='100%' stopColor='#FFF' stopOpacity='0' />
                    </linearGradient>
                    <circle id='a' cx='128' cy='128' r='128' />
                </defs>
                <mask id='b' fill='#fff'>
                    <use xlinkHref='#a' />
                </mask>
                <g mask='url(#b)'>
                    <circle cx='128' cy='128' r='128' />
                    <path
                        fill='url(#c)'
                        d='M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z'
                    />
                    <path
                        fill='url(#d)'
                        d='M163.556 76.8h17.067v102.4h-17.067z'
                    />
                </g>
            </svg>
            <p>Next.js</p>
        </section>
    )
}

function DiscordIcon() {
    return (
        <section className='flex items-center gap-2 rounded-lg bg-zinc-800 px-2.5 py-1.5'>
            <svg
                viewBox='0 0 256 199'
                className='size-[18px]'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='xMidYMid'
            >
                <path
                    d='M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z'
                    fill='#5865F2'
                />
            </svg>
            <p>Discord</p>
        </section>
    )
}

export { DevelopingIcon, PausedIcon, APIIcon, NextJsIcon, DiscordIcon }
