'use client'

export default function MobileToggle(props) {
    const { toggleMenu } = props;
    return(
        <button
            className='p-1'
            onClick={toggleMenu}
        >
            <span className='text-4xl text-main'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" /></svg>
            </span>
        </button>
    )
}