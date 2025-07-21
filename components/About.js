"use client"
import React from 'react'
import Image from 'next/image'
import DownloadCv from './DownloadCv'

const About = () => {
    return (
        <section id='about' className="about relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 bg-white py-10 md:py-15 lg:py-20 w-[90%] md:w-[80%] mx-auto">
            <div className="col1 order-1 lg:order-0 flex items-center  justify-center overflow-hidden">
            <Image src="/about.jpg" alt="web developer" width={"600"} height={"600"} className='rounded-md'/>

            </div>


            <div className="col2 order-0 lg:order-1 flex flex-col gap-5 md:gap-4">
                <div className="1 text-xl md:text-2xl font-bold text-[#9A87F4]">
                    I'm a Developer
                </div>
                <div className="2 text-3xl md:text-6xl font-bold ">
                    I Develop Amazing Websites
                </div>
                <div className="3 desc text-justify md:text-left  font-thin">
                    <span className='font-semibold'>Frontend Developer</span> (expanding to <span className='font-semibold'>Full-Stack</span>) with expertise in <span className='font-semibold'>JavaScript, React, Tailwind CSS, Next.js 15 & MongoDB.</span> Passionate about crafting <span className='font-semibold'>performant, accessible, and responsive UIs</span> with modern tools while actively learning backend technologies to develop full-stack solutions. Strong foundation in <span className='font-semibold'>frontend fundamentals</span> and a focus on clean, maintainable code for modern web applications.
                </div>
                <div className="buttons flex items-center gap-5 md:gap-10">
                    <div className="signature">
                        <Image src='/sig.png' alt='signature' width={200} height={36} className='mix-blend-darken' />
                    </div>
                    <div className='flex gap-2 items-center text-sm font-bold cursor-pointer '>
                    <DownloadCv/>
                    <img src="/line.svg" alt="line" className=" w-4 md:pt-1" />
                    </div>
                    
                </div>
            </div>

        </section>
    )
}

export default About
