'use client'
import { useState } from 'react'
import React from 'react'
import Image from 'next/image';
import logo from '../components/logo.jpg'
import fb from '../components/fb.png'
import Link from 'next/link';
import insta from '../components/insta.png'
import Scroll from '../Scroll1'
function scrollToElement() {
    const element = document.getElementById('target');
    element.scrollIntoView({ behavior: 'smooth' });
}

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        // <nav className='justify-between items-center   fixed  top-0 right-0 left-0 z-10 ' >
        //     <div className='h-[100%] w-[100%]  back1 top-0 right-0 left-0 '>
        //         <div className='flex m-0 left-0 h-20 '>
        //             <div className='mt-0 m-4 ml-10 h-15 w-30'><Image src={logo} alt='' className='' width="3px" height="3px" /></div>
        //             <span className='text-white text-4xl font-bold mt-4'>JGVFX</span>
        //             <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"} target='_blank'><button type="button" className="hover:cursor-pointer mt-4 ml-300 absolute hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-4xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">GET IN TOUCH</button></Link>
        //             <div className='flex ml-271 mt-5 h-8 w-8 hover:cursor-pointer '><Link href="https://www.facebook.com/jgvfxonline16?rdid=kgBj7O0em54GgTvg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BQJrPawPL%2F#" target='_blank'><Image src={fb} alt='' className='' width="3px" height="3px" /></Link> </div>
        //             <div className='flex ml-6 mt-5.5 h-10 w-10 hover:cursor-pointer'><Link href="https://www.instagram.com/jgvfxonlinevfx?igsh=NWhvOWF6ZGZ5MHIx" target='_blank'><Image src={insta} alt='' className='' width="5px" height="5px" /></Link></div>
        //         </div>
        //     </div>
        //     <div className="bg-white h-0.5 rounded-4xl left-0"></div>
        //     <div className='h-[30%] bg-black items-center overflow-hidden'>
        //         <ul className=' pl-10 pt-2 pb-1 text-white flex gap-10 content-center'>
        //             <li className='hover:cursor-pointer hover:text-gray-400'><a href='#home'>HOME</a></li>
        //             <li className='hover:cursor-pointer'><a href='#courses' >COURSES</a ></li>
        //             <li className='hover:cursor-pointer'><a href='#students'>STUDENT WORKS</a></li>
        //             <li className='hover:cursor-pointer'><a href='#about'>ABOUT US</a></li>
        //             <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"} target='_blank'><li id='target' className='hover:cursor-pointer' >JOIN US</li></Link>
        //         </ul>
        //         <div className="bg-white h-1 opacity-15 left-0"></div>
        //     </div>

        // </nav>
        <header className="md:fixed top-0 left-0 right-0 z-50 back2 shadow-lg">
            {/* Top nav bar */}
            <div className="flex gap-[50%] items-center px-15 py-4">
                <div className="flex items-center space-x-4">
                    <Image src={logo} alt="Logo" width={100} height={100} />
                    <span className="text-white text-4xl font-bold">JGVFX</span>
                </div>

                {/* Desktop Icons & Button */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"
                        target="_blank"
                    >
                        <button className="border border-white text-white px-5 py-2 rounded-full hover:bg-gray-800">
                            ADMISSION GOING ON
                        </button>
                    </Link>
                    <Link href="https://www.facebook.com/jgvfxonline16" target="_blank">
                        <Image src={fb} alt="Facebook" width={30} height={30} />
                    </Link>
                    <Link href="https://www.instagram.com/jgvfxonlinevfx" target="_blank">
                        <Image src={insta} alt="Instagram" width={30} height={30} />
                    </Link>
                </div>

                {/* Mobile hamburger icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Bottom nav links (desktop) */}
            <nav className="hidden md:flex pl-10  bg-black text-white border-t border-white">
                <ul className="flex gap-10 py-2 text-sm font-medium">
                    <li><a href="#home" className="hover:text-gray-400">HOME</a></li>
                    <li><a href="#courses" className="hover:text-gray-400">COURSES</a></li>
                    <li><a href="#students" className="hover:text-gray-400">STUDENT WORKS</a></li>
                    <li><a href="#about" className="hover:text-gray-400">ABOUT US</a></li>
                    <li><a href="#join" className="hover:text-gray-400">JOIN US</a></li>
                </ul>
            </nav>
            <div className="bg-gray-500 h-0.5 rounded-4xl left-0"></div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 border-t border-white">
                    <a href="#home" className="block">HOME</a>
                    <a href="#courses" className="block">COURSES</a>
                    <a href="#students" className="block">STUDENT WORKS</a>
                    <a href="#about" className="block">ABOUT US</a>
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"
                        target="_blank"
                        className="block"
                    >
                        JOIN US
                    </Link>
                    <div className="flex gap-4 mt-2">
                        <Link href="https://www.facebook.com/jgvfxonline16" target="_blank">
                            <Image src={fb} alt="FB" width={24} height={24} />
                        </Link>
                        <Link href="https://www.instagram.com/jgvfxonlinevfx" target="_blank">
                            <Image src={insta} alt="Insta" width={24} height={24} />
                        </Link>
                    </div>
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"
                        target="_blank"
                    >
                        <button className="w-50 border border-white px-4 py-2 rounded hover:bg-gray-700">
                            ADMISSION GOING ON
                        </button>
                    </Link>
                </div>
            )}
        </header>

    )
}

export default Navbar