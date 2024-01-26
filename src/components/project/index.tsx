import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Icon } from "..";

export default function Project() {

    const projects = [
        {
            name: "YoruLive",
            description: "Plataforma de streaming y reproducción de contenido multimedia.",
            status: "paused",
            url: "/",
            icons: [Icon.DevelopingIcon, Icon.NextJsIcon],
        },
        {
            name: "YoruBot",
            description: "El bot oficial del “yoruverso”. Para cualquier servidor de Discord.",
            status: "paused",
            url: "/",
            icons: [Icon.DevelopingIcon, Icon.DiscordIcon]
        },
        {
            name: "YoruGacha",
            description: "Gachapón y wiki de personajes de anime y manga. API pública.",
            status: "paused",
            url: "/",
            icons: [Icon.PausedIcon, Icon.APIIcon, Icon.NextJsIcon]
        }
    ];

    return (
        <main
            id="project"
            className="h-dvh bg-page-1 flex flex-col gap-24 justify-center items-center">
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ amount: "all" }}
                className="uppercase text-white flex items-center text-8xl font-black">
                <p className="bg-gradient bg-clip-text text-transparent">Yoru</p>
                <p>verse</p>
            </motion.header>
            <motion.aside
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: "all" }}
                className="flex gap-10">
                {projects.map((content, i) => (
                    <motion.article
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        key={i} className="bg-gradient rounded-xl p-1 overflow-hidden">
                        <section className="flex rounded-xl w-80 flex-col items-center justify-center gap-2.5 p-2.5 bg-zinc-900">
                            <figure className="relative w-74 h-50 rounded-xl bg-zinc-700">

                            </figure>
                            <footer className="text-zinc-400 w-full flex flex-col gap-5 p-2.5">
                                <header className="flex flex-col gap-2.5">
                                    <p className="text-xl text-white font-medium">{content.name}</p>
                                    <article className="text-sm leading-5">
                                        {content.description}
                                        <Link href={content.url} className="inline-flex font-medium text-blue-400 ml-1">
                                            Saber más
                                            <IconArrowUpRight size={18} stroke={3} />
                                        </Link>
                                    </article>
                                </header>
                                <footer className="flex gap-2.5 not-italic text-white text-xs">
                                    {content.icons.map((icon, i) => (
                                        <section key={i}>
                                            {icon()}
                                        </section>
                                    ))}
                                </footer>
                            </footer>
                        </section>
                    </motion.article>
                ))}
            </motion.aside>
        </main>
    )
}

