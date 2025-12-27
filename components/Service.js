import React from 'react'
import Image from 'next/image'

const Service = () => {
  return (
    <section id='services' className='mx-4 md:mx-10 flex flex-col gap-10  py-10 md:py-12 lg classname="md:w-10 md:h-10":py-15'>

      <div className=" flex flex-col gap-3 items-center text-center">
        <div className="1 text-[#9A87F4] text-xl lg:text-3xl text-center font-bold">
          What I Build
        </div>
        <div className="2 text-3xl md:text-6xl font-bold">
          Modern Web Solutions I Work On
        </div>
        
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-3 md:place-content-center ">

        <div className="1 shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:ease-in-out md:transform md:hover:scale-110 md:hover:z-10 bg-white ">

          <div className="flex flex-col gap-3">
             <div className="flex gap-3 items-center">
              <div className="img pt-1">
                <Image src={"/s3.png"} alt='icon' width={30} height={30} />
              </div>
              <div className='font-bold text-xl lg:text-2xl'>
                Frontend Web Development
              </div>
            </div> 
            <p>I build responsive, high-performance user interfaces using React, Next.js, and modern frontend best practices.</p>


          </div>
        </div>

        <div className="2 shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:transform md:hover:scale-110 md:hover:z-10 bg-white ">

          <div className="flex flex-col gap-3">
             <div className="flex gap-3 items-center">
              <div className="img pt-1">
                <Image src={"/layout.svg"} alt='icon' width={30} height={30} />
              </div>
              <div className='font-bold text-xl lg:text-2xl'>
                High-Converting Landing Pages
              </div>
            </div> 
            
            <p>
             I create visually engaging landing pages focused on clarity, performance, and conversion-driven layouts.
            </p>
          </div>

        </div>
        <div className="3 shadow-lg py-3 px-2 md:px-1 lg:px-4  rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:transform md:hover:scale-110 md:hover:z-10 bg-white ">

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <div className="img pt-1">
                <Image src={"/uc.svg"} alt='icon'  width={30} height={30} />
              </div>
              <div className='font-bold text-xl lg:text-2xl'>
                UI / Design to Code Conversion
              </div>
            </div>
            <p>
              I convert Figma, Adobe XD, or PSD designs into pixel-perfect, responsive, and accessible code.
            </p>
          </div>

        </div>
        <div className="4 shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:transform md:hover:scale-110 md:hover:z-10 bg-white ">

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <div className="img pt-1">
                <Image src={"/avatar.svg"} alt='icon' width={30} height={30} />
              </div>
              <div className='font-bold text-xl lg:text-2xl'>
                WordPress & WooCommerce Websites
              </div>
            </div>
            <p>I develop custom WordPress and WooCommerce websites using Elementor for business and e-commerce needs.</p>
          </div>

        </div>



        <div className="5 shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:transform md:hover:scale-110 md:hover:z-100 hover:shadow-xl bg-white">

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <div className="img pt-1">
                <Image src={"/s2.png"} alt='icon' width={30} height={30}/>
              </div>
              <div className='font-bold text-xl lg:text-2xl'>
                Animated Websites & Motion UI
              </div>
            </div>
            <p>I implement smooth, performance-optimized animations and scroll interactions using GSAP to enhance user experience.</p>
          </div>
        </div>


        <div className="6 relative shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:transform z-0 md:hover:z-10 bg-white opacity-50 bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.6))]">
          <div className=' text-white shadow-md text-center text-3xl font-bold absolute top-[40%] left-[25%]'>
            Coming Soon!!!
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <div className="img pt-1">
                <Image src={"/tools.svg"} alt='ic classname="md:w-10 md:h-10"on' width={30} height={30} />
              </div>
              <div className='font-bold text-xl lg:text-2xl'>
                Full-Stack Web Applications
              </div>
            </div>
            <p>I’m expanding into full-stack development with Next.js APIs and MongoDB for scalable web applications.</p>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Service
