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
        <section id="projects" className="py-32 bg-gray-100">
            <div className="app-container">
                <div></div>
                <div className="grid grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div key={index}>
                            <Link 
                                href={'/'}
                                className="block relative w-full h-[300px] bg-white"
                            >
                                <span className="flex items-center justify-center w-16 h-16 absolute z-[10] bottom-[-20px] right-[-20px] bg-main text-white text-3xl hover:bottom-[-10px] hover:right-[-10px] transition-all duration-300 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"/></svg>
                                </span>

                                <div className="absolute z-[1] w-full h-full top-0 left-0 bg-black/30" />

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
                <div>
                <div className="flex h-20 items-center justify-center">
                   
                    <div className="flex-1 pt-8 flex justify-end text-main font-bold text-xl"> 
                             <Link href={'/'} >
                                 Tüm Projeleri Kesfet
                             </Link>
                    </div> 
                    <div>
                             <Link 
                                href={'/'}
                                className="block relative w-full h-[300px] bg-white"
                            >
                                <span className="flex items-center justify-center w-10 h-10 absolute z-[10] bottom-[110px] right-[-45px]  text-main text-3xl transition-all duration-300 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"/></svg>
                                </span>

                                <div className="absolute z-[1] w-full h-full top-0 left-0 bg-black" />

                            </Link>
                    </div>
                </div>     
               
               </div>
            </div>
        </section>
    )
}