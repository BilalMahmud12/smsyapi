import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectCard({ project }) {
    const { title, image, slug } = project

    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Link 
                    href={slug}
                    className="block rounded-2xl overflow-hidden shadow transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                >
                    <div className="h-[280px] overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            width={400}
                            height={300}
                            priority
                            className="w-full h-[300px] object-cover"
                        />
                    </div>
                    <div className="px-6 py-4 bg-white">
                        <h3>{title}</h3>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    )
}