import Hero from './hero.section.js'
import About from './about.section.js'
import Projects from './projects.section.js'

export default function Home() {
    return (
        <main id='pageMain' className="">
            <Hero />
            <About />
            <Projects />
        </main>
    )
}

