'use client'
import { Navigation, Project, About, Support } from '@/components'
import { useState } from 'react'

export default function Home() {

    const [onViewport, setOnViewport] = useState<number>();

    return (
        <main className='scroll-smooth antialiased'>
            <Navigation onViewport={onViewport} />
            <Project setOnViewport={setOnViewport} />
            <About setOnViewport={setOnViewport} />
            <Support setOnViewport={setOnViewport} />
        </main>
    )
}
