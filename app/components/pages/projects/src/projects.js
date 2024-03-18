import { projects } from "../../../../content/projects"
import ProjectCard from "./projectCard"

export default function Projects() {
    return(
        <section id="projects" className="py-12 bg-gray-100">
            <div className="app-container">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                        />
                    ))}
                </div>
                
            </div>
        </section>
    )
}