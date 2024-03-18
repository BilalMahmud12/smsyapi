import React from 'react'
import Link from 'next/link'
import Logo from './logo'
import Menu from './menu'
import MobileMenu from './mobileMenu'

export default function Header() {
    return (
        <React.Fragment>
            <header className='w-full py-3 bg-white shadow'>
                <div className='hidden  absolute z-[0] top-0 w-[250px] xl:w-[310px] h-[100px] bg-white rounded-br-full shadow '></div>
                <div className='hidden lg:block app-container relative z-10'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-24'>
                            <Link href='/' className=''>
                                <Logo />
                            </Link>
                            <Menu />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='text-2xl text-accent w-10 h-10 border-2 border-accent rounded-full flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7m-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3"/></svg>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-accent text-xs'>Bize Hemen Ulaşın</span>
                                <span className='text-main font-bold text-lg'>0216 000 00 00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden'>
                    <div className='app-container'>
                        <div className='flex items-center justify-between'>
                            <Link href='/' className=''>
                                <Logo />
                            </Link>

                            <div className='flex items-center'>
                                <button className='p-1 mr-2'>
                                    <span className='text-xl text-accent w-8 h-8 border-2 border-accent rounded-full flex items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7m-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3" /></svg>
                                    </span>
                                </button>

                                <MobileMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    ) 
}