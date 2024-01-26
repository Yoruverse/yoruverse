import Link from 'next/link'

export default function Navigation() {
    const links = [
        {
            name: 'Proyectos',
            url: '/#project',
            active: true,
        },
        {
            name: 'Quiénes somos',
            url: '/#about',
            active: false,
        },
        {
            name: 'Apóyanos',
            url: '/#support',
            active: false,
        },
    ]

    return (
        <nav className='bg-gradient/10 fixed right-1/2 top-5 z-50 flex w-fit translate-x-1/2 items-center justify-between gap-10 rounded-lg p-5 py-2.5 text-sm font-medium backdrop-blur-sm'>
            {links.map((link, i) => (
                <Link
                    href={link.url}
                    className='flex w-32 items-center justify-center gap-2 truncate py-1.5 text-white'
                    key={i}
                >
                    {link.active && (
                        <span className='h-2 w-2 rounded-full bg-green-400' />
                    )}
                    <p>{link.name}</p>
                </Link>
            ))}
        </nav>
    )
}
