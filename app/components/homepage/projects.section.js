import Link from "next/link"
import Image from "next/image"

const projects = [
    {
        title: 'Proje 1',
        image: '/images/about.jpg',
        path: '/proje-1'
    },
    {
        title: 'Proje 2',
        image: '/images/projects.png',
        path: '/proje-2'
    }
]

export default function Projects() {
    return(
        <section id="projects" className="py-16 sm:py-20 bg-gray-100">
            <div className="app-container">
                <div className="flex items-center mb-8 sm:mb-12">
                    <h3 className="text-3xl font-bold">Projelerimiz</h3>
                </div>

                <div className="grid grid-col-1 px-4 sm:px-0 sm:grid-cols-2 gap-12 mb-12">
                    {projects.map((project, index) => (
                        <div key={index} className="relative">
                            <Link 
                                href={'/'}
                                className="block relative w-full h-[300px] bg-white rounded-2xl overflow-hidden"
                            >   
                                <div className="absolute z-[1] w-full h-full top-0 left-0 bg-black/30" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={1000}
                                    height={800}
                                    className="object-cover w-full h-full"
                                />
                            </Link>
                            <span className="flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-xl absolute z-[10] bottom-[-20px] right-[-20px] bg-accent text-white text-2xl sm:text-3xl hover:bottom-[-10px] hover:right-[-10px] transition-all duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"/></svg>
                            </span>
                        </div>
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