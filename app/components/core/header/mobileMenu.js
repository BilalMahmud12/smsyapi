'use client'

import React, { useState } from 'react';
import Link from "next/link"

const menu = [
    { name: 'anasayfa', path: '/' },
    { name: 'kurumsal', path: '/kurumsal' },
    { name: 'projelerimiz', path: '/projelerimiz' },
    { name: 'galeri', path: '/galeri' },
    { name: 'iletişim', path: '/iletisim' },
]
export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <React.Fragment>
            <button
                className='p-1 w-[44px] h-[44px]'
                onClick={toggleMenu}
            >
                {!isOpen ? (
                    <span className='text-4xl text-main'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" /></svg>
                    </span>
                ) :

                (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-main">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                )}

            </button>

            {isOpen && (
            <div 
                className={'absolute w-full top-[68px] left-0 right-0 py-2 bg-white border-t border-gray-100 z-50 transition-all ease-in-out shadow' + (isOpen ? '' : 'w-0')}
            >
                <ul>
                    {menu.map((item, index) => (
                        <li key={index} className='py-2'>
                            <Link 
                                href={item.path} 
                                className='px-6 text-main text-sm font-semibold uppercase hover:text-accent transition-all ease-in-out duration-300'
                                onClick={toggleMenu}
                            >
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            )}
        </React.Fragment>
    )
}