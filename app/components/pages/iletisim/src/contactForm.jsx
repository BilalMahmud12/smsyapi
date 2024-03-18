'use client'
import { useState } from "react"
import { sendEmail } from "@/app/utils/send-email"

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleFormChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        sendEmail(formState)

        setFormState({
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    }

    return (
        <div className="w-full px-8 py-6 rounded-2xl bg-gray-100">
            <div>
                <h2 className="text-2xl font-semibold text-main mb-6">İletişim</h2>
                <p className="mb-4 text-main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa eaque reiciendis suscipit tempora?</p>
            </div>
            <div id="contactForm">
                <form>
                    <div className="grid grid-cols-1 gap-y-3">
                        <div>
                            <label htmlFor="name" className="block text-sm text-main font-semibold mb-2">Adınız</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className="w-full p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
                                value={formState.name}
                                onChange={handleFormChange} 
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm text-main font-semibold mb-2">E-Posta Adresiniz</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="w-full p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
                                value={formState.email}
                                onChange={handleFormChange} 
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm text-main font-semibold mb-2">Telefon Numaranız</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                className="w-full p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
                                value={formState.phone}
                                onChange={handleFormChange} 
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm text-main font-semibold mb-2">Mesajınız</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                rows="6" 
                                className="w-full p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
                                value={formState.message}
                                onChange={handleFormChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="w-full mt-6 px-8 py-3 bg-main text-white font-semibold rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-dark"
                            onClick={onSubmit}
                        >
                            Gönder
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}