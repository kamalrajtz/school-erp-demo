import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/demo-logo2.svg'

const AuthHeader = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 8)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-30 w-full px-4 py-4 md:px-6 lg:px-10 transition-colors duration-300 ease-in-out ${
                scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
            }`}
        >
            <img src={logo} alt="logo" className="w-52" />
        </header>
    )
}

export default AuthHeader
