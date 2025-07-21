"use client"
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Project from "@/components/Project";
import Service from "@/components/Service";
import Skills from "@/components/Skills";
import Speciality from "@/components/Speciality";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
// import Lenis from "lenis";


export default function Home() {

  // useEffect(() => {
  //   // Initialize Lenis
  //   const lenis = new Lenis();

  //   // Use requestAnimationFrame to continuously update the scroll
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);


  // }, [])


  return (
    <>
      <section className="hero bg-[url('/real.png')]  bg-center">
        <Navbar />

        <div className="intro grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[80%] mx-auto gap-10 lg:gap-5 pt-8 md:pt-15 lg:pt-20 md:pb-20 lg:pb-40 pb-17 ">
          <div className="col1 flex flex-col lg:pt-5 gap-5">
            <div className="1 text-2xl md:text-3xl font-bold autoShow">
              Hello, I'm
            </div>
            <div className="2 text-5xl md:text-6xl font-bold autoShow">
              Khurram Raja
            </div>
            <div className="3 text-xl md:text-3xl font-bold autoShow">
              A <span className="text-[#9A87F4]">Web </span>Developer from <span className="text-[#9A87F4]"> Kashmir 🌲</span>
            </div>
            <div className="desc line-clamp-2 font-thin autoShow">
              <span className='font-semibold'>Frontend Developer</span> (expanding to <span className='font-semibold'>Full-Stack</span>) with expertise in <span className='font-semibold'>JavaScript, React, Tailwind CSS, Next.js 15 & MongoDB.</span> Passionate about crafting <span className='font-semibold'>performant, accessible, and responsive UIs</span> with modern tools while actively learning backend technologies to develop full-stack solutions. Strong foundation in <span className='font-semibold'>frontend fundamentals</span> and a focus on clean, maintainable code for modern web applications.
            </div>
            <div className="buttons flex items-center gap-5 md:gap-10 ">
              <Link href={"#contact"}>
                <button className="text-white bg-[#F45C70] py-2 px-6 rounded-full font-semibold cursor-pointer hover:bg-[#f8909e] active:bg-[#d3485a]">
                  Hire Me
                </button>
              </Link>
              <Link href={"#about"}>
                <button className=" flex gap-2 items-center font-semibold cursor-pointer">
                  <span>
                    More About Me
                  </span>
                  <img src="/line.svg" alt="line" className=" w-4 md:pt-1" />
                </button>
              </Link>
            </div>
          </div>

          <div className="col2 flex mix-blend-darken items-center justify-center">

            <Image src={"/hero.jpg"} alt="hero img" width={500} height={500} />

          </div>
        </div>
      </section>

      <About />
      <Project />
      <Service />
      <Skills />
      <Speciality />
      <ContactUs />
      <Footer />
    </>

  );
}
