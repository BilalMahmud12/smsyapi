import Link from 'next/link'
import Logo from './logo'
import Menu from './menu'


export default function Header() {
    return (
        <header className='w-full py-3 shadow'>
            <div className='app-container'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-20'>
                        <Link href='/' className=''>
                            <Logo />
                        </Link>
                        <Menu />
                    </div>
                </div>
            </div>
        </header>
    ) 
}