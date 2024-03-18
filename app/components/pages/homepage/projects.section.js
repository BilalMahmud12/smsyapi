import Link from "next/link"
import { projects } from "@/app/content/projects"
import ProjectCard from "@/app/components/pages/projects/src/projectCard"

export default function Projects() {
    return(
        <section id="projects" className="py-16 sm:py-20 bg-gray-100">
            <div className="app-container">
                <div className="flex items-center mb-8 sm:mb-12">
                    <h3 className="text-3xl font-bold">Projelerimiz</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {projects.slice(0, 3).map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                        />
                    ))}
                </div>

                <div className="flex items-center justify-center sm:justify-end py-6">
                    <Link 
                        href={'/projelerimiz'}
                        className="flex items-center space-x-2 rounded-full px-10 py-3.5 bg-main text-white" 
                    >
                        <span className="text-base font-medium">Tüm Projeleri Kesfet</span>
                        <span className="text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"/></svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}