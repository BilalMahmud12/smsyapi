'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const menu = [
    { name: 'anasayfa', path: '/' },
    { name: 'kurumsal', path: '/kurumsal' },
    { name: 'projelerimiz', path: '/projelerimiz' },
    { name: 'galeri', path: '/galeri' },
    { name: 'iletişim', path: '/iletisim' },
]


export default function Menu() {
    const path = usePathname()

    return (
        <ul className='flex items-center space-x-8'>
            {menu.map((item, index) => (
                <li key={index}>
                    <Link 
                        href={item.path} 
                        className={`${item.path === path ? 'text-accent' : 'text-main'} text-sm font-semibold uppercase hover:text-accent transition-all ease-in-out duration-300`}
                    >
                        <span>{item.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
