import Link from 'next/link'

const menu = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
]

export default function Header() {
    return (
        <header className='w-full'>
            <div className='flex justify-between' >
                <div>
                    <Link href='/'>
                        <span>Logo</span>
                    </Link>
                </div>
                <ul className='flex items-center space-x-8'>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path}>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    ) 
}