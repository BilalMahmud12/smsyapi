'use client'

export default function MobileMenu(props) {
    const { isOpen } = props
    return(
        <div 
            className={'absolute top-0 left-0 right-0 bottom-0 bg-red-100 z-50 transition-all divide-neutral-900 ease-in-out ' + (isOpen ? '' : 'w-0')}
        >

        </div>
    )
}