
import React , { useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import DownloadCv from './DownloadCv'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (

     <nav className='w-[90%] md:w-[80%] lg:w-[80%] m-auto flex items-center justify-between md:py-8 py-5'>
      {/* Logo always visible */}
      <div className="logo flex-shrink-0">
        <Image src={"/logo.png"} width={150} height={150} alt='logo' priority />
      </div>

      {/* Desktop Nav */}
      <ul className='hidden lg:flex items-center gap-8 font-bold'>
        <Link href={"/"}><li className='hover:text-[#F45C70] transition-colors duration-200'>Home</li></Link>
        <Link href={"#about"}><li className='hover:text-[#F45C70] transition-colors duration-200'>About</li></Link>
        <Link href={"#work"}><li className='hover:text-[#F45C70] transition-colors duration-200'>Portfolio</li></Link>
        <Link href={"#services"}><li className='hover:text-[#F45C70] transition-colors duration-200'>Services</li></Link>
        <Link href={"#contact"}><li className='hover:text-[#F45C70] transition-colors duration-200'>Contact</li></Link>
        <li className='border-2 border-[#E85C74] py-2 px-4 rounded-full active:bg-[#F45C70] cursor-pointer font-bold'><DownloadCv /></li>
      </ul>

      {/* Hamburger menu for mobile */}
      <button
        className="lg:hidden ml-2"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg className="w-8 h-8 text-[#F45C70]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
        </svg>
      </button>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-colors duration-300 ${menuOpen ? 'bg-black bg-opacity-40 pointer-events-auto' : 'pointer-events-none bg-transparent'} overflow-x-hidden`}
        style={{ transitionProperty: 'background-color, opacity' }}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-screen  w-[100vw] bg-white shadow-lg flex flex-col transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between px-4  py-4 border-b">
            <Image src={"/logo.png"} width={120} height={120} alt='logo' priority className="w-20 h-20 md:w-40 md:h-40 object-contain" />
            <button
              className="p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-8 h-8 md:w-12 md:h-12 text-[#F45C70]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Nav items */}
          <ul className="flex flex-col gap-6  items-center font-bold px-8 py-8">
            <Link href={"/"} onClick={() => setMenuOpen(false)}><li className='hover:text-[#F45C70] text-2xl md:text-3xl transition-colors duration-200'>Home</li></Link>
            <Link href={"#about"} onClick={() => setMenuOpen(false)}><li className='hover:text-[#F45C70] text-2xl md:text-3xl  transition-colors duration-200'>About</li></Link>
            <Link href={"#work"} onClick={() => setMenuOpen(false)}><li className='hover:text-[#F45C70] text-2xl md:text-3xl  transition-colors duration-200'>Portfolio</li></Link>
            <Link href={"#services"} onClick={() => setMenuOpen(false)}><li className='hover:text-[#F45C70] text-2xl md:text-3xl  transition-colors duration-200'>Services</li></Link>
            <Link href={"#contact"} onClick={() => setMenuOpen(false)}><li className='hover:text-[#F45C70] text-2xl md:text-3xl transition-colors duration-200'>Contact</li></Link>
            <li onClick={() => setMenuOpen(false)} className='flex justify-center text-xl md:text-3xl  border-2 border-[#E85C74] w-[60%] md:w-[40%] py-2 px-4 rounded-full active:bg-[#F45C70] cursor-pointer font-bold'><DownloadCv /></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

