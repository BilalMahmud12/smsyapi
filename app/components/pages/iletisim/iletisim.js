import ContactForm from "./src/contactForm"

export default function Iletisim() {
    return(
        <section id="contact" className="py-16 ">
            <div className="app-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-8">
                    <div className="flex flex-col justify-between">
                        <div className="mb-6 space-y-3">
                            <div className="text-main text-xl">Merkez Ofisi</div>
                            <div className="flex items-center space-x-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </span>
                                <span className="text-main text-sm">
                                    İstiklal, Anafartalar Cd. 48 / C, 34762 Ümraniye/İstanbul
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </span>
                                <span className="text-main text-sm">
                                    (0216) 344 18 57
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </span>
                                <span className="text-main text-sm">
                                    info@smsyapigroup.com.tr
                                </span>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5501942975993!2d29.097739776129092!3d41.0132173713498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac918cbf1fcad%3A0xd0d219ed2ed14046!2sSMS%20YAPI%20GRUP!5e0!3m2!1sen!2str!4v1710350050578!5m2!1sen!2str" 
                                width="600" 
                                height="500" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}