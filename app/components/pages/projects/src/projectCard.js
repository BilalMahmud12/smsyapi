import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectCard({ project }) {
    const { 
        title, 
        image, 
        slug,
        status,
        shortDescription,
        startDate,
        deliveryDate 
    } = project

    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Link 
                    href={`projelerimiz/${slug}`}
                    className="relative block rounded-2xl overflow-hidden shadow transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                >
                    <span className="absolute top-5 left-6 text-xs px-3 py-1 rounded-md bg-accent text-white">
                        {status}
                    </span>
                    <div className="h-[260px] overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            width={400}
                            height={300}
                            priority
                            className="w-full h-[260px] object-cover"
                        />
                    </div>
                    <div className="px-6 py-4 bg-white">
                        <h3 className="font-semibold text-main mb-1">{title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{shortDescription}</p>
                        <div>
                            <span className="block text-xs text-accent mb-1">Başlangıç Tarihi: {startDate}</span>
                            <span className="block text-xs text-accent">Teslim Tarihi: {deliveryDate}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    )
}