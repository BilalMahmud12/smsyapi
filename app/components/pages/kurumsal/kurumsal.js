
import Image from "next/image"
import { kurumsal } from "@/app/content/kurumsal"

export default function Projects() {
    return(
        <section id="projects" className="py-12">
            <div className="app-container">
                <div className="flex flex-col-reverse sm:flex-row items-center space-y-0 sm:space-x-12">
                    <div className="flex-1">
                        <Image
                            src="/images/kurumsal.webp"
                            alt="About us"
                            width={500}
                            height={500}
                            layout="responsive"
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="mb-6">
                            <h2 className="text-xl font-medium text-main mb-3">Hakkımızda</h2>
                            <p className="text-gray-600">{kurumsal.Hakkımızda}</p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-medium text-main mb-3">Misyonumuz</h2>
                            <p className="text-gray-600">{kurumsal.Misyonumuz}</p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-medium text-main mb-3">Vizyonumuz</h2>
                            <p className="text-gray-600">{kurumsal.Vizyonumuz}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}