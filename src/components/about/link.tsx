import Link from "next/link";

interface LinkProps {
    href: string;
}

function Discord({ href }: LinkProps) {
    return (
        <Link href={href} className="size-[30px] flex items-center justify-center bg-zinc-800 rounded-md">
            <svg viewBox="0 0 256 199" className="size-[18px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2" />
            </svg>
        </Link>
    )
}

function Twitch({ href }: LinkProps) {
    return (
        <Link href={href} className="size-[30px] flex items-center justify-center bg-zinc-800 rounded-md">
            <svg fill="#9146ff" className="size-[18px]" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 2400 2800">
                <path d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z" fill="#fff" />
                <g id="Layer_1-2">
                    <path d="M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z" className="st1" />
                    <path d="M1700 550h200v600h-200zM1150 550h200v600h-200z" className="st1" />
                </g>
            </svg>
        </Link>
    )
}
function Youtube({ href }: LinkProps) {
    return (
        <Link href={href} className="size-[30px] flex items-center justify-center bg-zinc-800 rounded-md">
            <svg viewBox="0 0 256 180" className="size-[18px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <path d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z" fill="red" />
                <path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z" />
            </svg>
        </Link>
    )
}

export { Discord, Twitch, Youtube };