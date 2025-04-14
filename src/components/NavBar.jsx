import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
  return (
    <header className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}>
        <div className="inner">
            <a href="#hero" className='logo'>
                <img src="/images/solumentics-logo.png" alt="Solumentics" className='w-32 sm:w-40 md:w-52 lg:w-60 xl:w-72 h-auto object-contain' />
            </a>

            <nav className='desktop'>
                <ul>
                    {navLinks.map(({ link, name }) => (
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className='underline' />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a href="#contact" className='contact-btn group'>
                <div className="inner">
                    <span>Contact Us</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar