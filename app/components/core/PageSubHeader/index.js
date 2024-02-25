
import Image from 'next/image';

export default function PageSubHeader(props) {
    const { title, description } = props;

    return (
        <div className="relative h-[260px] py-12 flex items-center">
            <div>
                <div className="absolute z-0 top-0 left-0 right-0 h-full w-full bg-black/50" />
                <div className="absolute z-[-1] top-0 left-0 right-0 h-full w-full">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Hero Image"
                        width={1920}
                        height={1080}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            <div className="app-container relative z-10 w-full">
                <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
                <p className="text-lg text-white">{description}</p>
            </div>
        </div>
    )
}