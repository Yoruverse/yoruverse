import Link from "next/link";

export default function Navigation() {

    const links = [
        {
            name: "Proyectos",
            url: "/#project",
            active: true,
        },
        {
            name: "Quiénes somos",
            url: "/#about",
            active: false,
        },
        {
            name: "Apóyanos",
            url: "/#support",
            active: false,
        },
    ]

    return (
        <nav className="z-50 backdrop-blur-sm flex text-sm rounded-lg font-medium bg-gradient/10 items-center justify-between p-5 py-2.5 gap-10 w-fit fixed top-5 right-1/2 translate-x-1/2">
            {links.map((link, i) => (
                <Link href={link.url} className="truncate text-white flex justify-center items-center w-32 gap-2 py-1.5" key={i}>
                    {link.active && (
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                    )}
                    <p>{link.name}</p>
                </Link>
            ))}
        </nav>
    )
}