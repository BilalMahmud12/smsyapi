import React from 'react'
import Link from 'next/link'
import Logo from './logo'

const menu = [
    {
        title: 'Kimiz',
        items: [
          {text: "Projeler", path: "/projelerimiz"},
          {text: "Kalitemiz", path: "/projelerimiz"},
          {text: "Kurumsal", path: "/projelerimiz"}
        ]
    },
    {
        title: 'Inşaat',
        items: [{
          text: "Müteahhitlik", path:"/"}  
        ]
    },
    {
        title: 'Hakkımızda',
        items: [
          {text: "Ne yapıyoruz?", path:"/"},
          {text: "Kalitemiz", path:"/"},
          {text: "İnancımız", path:"/"}
        ]
    }
]


export default function Footer() {
    return(
        <footer className="py-8 bg-main">
            <div className="app-container"> 
            <div className='flex flex-col sm:flex-row items-center'>
               <div>
                <div className='flex-1 p-4 sm:p-8 space-y-3'>
                   <div className="flex items-center justify-center">
                     <Link href='/' className=''>
                      <Logo variant="light" />
                    </Link>
                   </div>        
                
                 <div className="font-bold "> 
                    <div className="flex items-center justify-center space-x-2">
                 <Link href='https://twitter.com' target="_blank">
                   <span className="text-xl text-white">
                       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg>
                   </span>
                  </Link>

                  <Link href='https://facebook.com' target="_blank">
                   <span className="text-xl text-white">
                       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
                   </span>
                  </Link>

                  <Link href='https://instagram.com' target="_blank">
                   <span className="text-xl text-white">
                       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                   </span>
                  </Link>
                    </div>
                  </div>
                 
                  <div>
                    <span className="text-xs text-white">Tüm Hakları Saklıdır. © 2024, SMS Yapı Grup.</span>
                  </div>
                </div>
                </div>
               
                <div className='flex-1 flex justify-end'>
                 <div className="grid grid-cols-3 gap-8">
                    {menu.map((column, index) => (
                        <div key={index}>
                            <div className='space-y-2'>
                              <div className='text-white text-m font-semibold'>
                                {column.title}
                              </div>

                              {column.items.map((item, i) => (
                                <Link key={i} href={item.path} className='block mb-2'>
                                  <div>
                                    <div className='text-white text-xs'>{item.text}</div>
                                  </div>
                                </Link>
                              ))} 
                            </div>
                        </div>
                    ))}
                 </div>
              </div> 
            </div>
          </div> 
        </footer>
    )
}