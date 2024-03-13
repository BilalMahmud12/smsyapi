import Link from "next/link"
import Image from "next/image"

export default function Iletisim() {
    return(
        <section id="contact" className="py-16 ">
            <div className="app-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-8">
                    <div>Hello</div>
                    
                    <div className="w-full px-8 py-6 rounded-2xl bg-gray-100">
                        <div>
                            <h2 className="text-2xl font-semibold text-main mb-6">İletişim</h2>
                        </div>
                        <div id="contactForm">
                            <form action="">
                                <div className="grid grid-cols-1 gap-y-3">
                                    <div>
                                        <label htmlFor="name" className="block text-sm text-main font-semibold mb-2">Adınız</label>
                                        <input type="text" id="name" name="name" className="w-full p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm text-main font-semibold mb-2">E-Posta Adresiniz</label>
                                        <input type="email" id="email" name="email" className="w-full p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm text-main font-semibold mb-2">Telefon Numaranız</label>
                                        <input type="tel" id="phone" name="phone" className="w-full p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm text-main font-semibold mb-2">Mesajınız</label>
                                        <textarea name="message" id="message" rows="6" className="w-full p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="w-full mt-6 px-8 py-3 bg-main text-white font-semibold rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-dark">Gönder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}