import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <section id="aboutUs" className="py-32">
            <div className="app-container">
                <div className="flex items-center">
                    <div className="flex-1">
                        <div className="relative">
                            <div className="absolute z-[-1] w-full h-full rounded-2xl border-4 border-accent/30 top-[-30px] left-[-30px]"></div>
                            <div className="hidden absolute z-[-1] w-[200px] h-[200px] rounded-full border-2 border-main/20 bottom-[-80px] right-[-60px]"></div>
                            <Image
                                src="/images/about.jpg"
                                alt="About Us"
                                width={1000}
                                height={800}
                                priority
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="pl-28">
                            <h2 className="text-3xl font-bold text-accent mb-12">Hakkımızda</h2>
                            <p className="text-main font-medium mb-16">
                                Yenilikçi Mimarlık ve Sürdürülebilir Tasarımlarla Geleceği İnşa Eden XYZ İnşaat, 2000 yılından bu yana kalite ve güvenin simgesi olarak sektörde öncü bir rol üstlenmiştir. 
                                <br />
                                <br />
                                Tecrübeli ekibimizle hayallerinizi güvenle gerçeğe dönüştürüyor, her projeyle yaşam alanlarınızı değer katıyoruz.
                            </p>

                            <Link 
                                href="/projelerimiz"
                                className="px-12 lg:px-16 py-2.5 lg:py-3.5 rounded-full  text-white font-semibold bg-accent hover:bg-main transition-all ease-in-out duration-300 mt-8"
                            >
                                <span>Okumaya Devam et</span>
                            </Link>
                        </div>
                    </div>

                   
                </div>
                
            </div>
        </section>
    )
}