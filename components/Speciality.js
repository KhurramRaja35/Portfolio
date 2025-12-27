import React from 'react'
import Image from 'next/image'

const Speciality = () => {
  return (
    <section className='mx-4 md:mx-6 lg:mx-10 py-10 md:py-12 lg:py-15 flex flex-col gap-8'>

      <div className="flex flex-col gap-4 items-center md:text-center" >
        <div className="1 text-xl md:text-2xl font-bold text-[#9A87F4]">
          Speciality
        </div>
        <div className="2 text-3xl md:text-6xl font-bold ">
          Why Choose Me
        </div>
        <div className="desc w-full  lg:w-[90%] md:mx-auto line-clamp-4 md:line-clamp-2 text-justify  md:text-center">
          I bring a unique blend of passion and skill, delivering tailored web solutions with React, Next.js, and TailwindCSS. My commitment to quality and continuous learning ensures your projects stand out with innovative, reliable results.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-3 ">

        <div className="1 shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:ease-in-out md:transform md:hover:scale-110 md:hover:z-10 bg-white">

          <div className="flex flex-col gap-3">
            <div className="flex gap-3  items-center">
              <div className="img pt-1">
                <Image src={"/icon2.png"} alt="icon" width={30} height={30} />
              </div>
              <h2 className=' font-bold text-xl lg:text-2xl'>
                Talented Developer
              </h2>
            </div>
            <p>Skilled in modern web technologies
              with a focus on clean, scalable code
              that brings ideas to life.
              Dedicated to writing maintainable logic. </p>


          </div>
        </div>

        <div className="2 shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:ease-in-out md:transform md:hover:scale-110 md:hover:z-10 bg-white">

          <div className="flex flex-col gap-3">

            <div className="flex gap-3  items-center">
              <div className="img pt-1">
                <Image src={"/icon4.png"} alt="icon" width={30} height={30} />
              </div>
              <h2 className=' font-bold text-xl lg:text-2xl'>
                Modren Technology
              </h2>
            </div>
            <p>
              I use the latest frameworks and tools
              to build fast, reliable applications
              with modern development practices.
              Your product stays ahead of the curve.
            </p>
          </div>

        </div>
        <div className="3 shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:ease-in-out md:transform md:hover:scale-110 md:hover:z-10 bg-white">

          <div className="flex flex-col gap-3">

            <div className="flex gap-3 items-center ">
              <div className="img pt-1">
                <Image src={"/icon7.png"} alt="icon" width={30} height={30} />
              </div>
              <h2 className=' font-bold text-xl lg:text-2xl'>
                Responsive Designs
              </h2>
            </div>
            <p>
              Every layout adapts to any screen size -
              mobile, tablet, or desktop.
              Smooth usability across all devices.
              Built with flexibility in mind.
            </p>
          </div>

        </div>
        <div className="4 shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:ease-in-out md:transform md:hover:scale-110 md:hover:z-10 bg-white">

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center ">
              <div className="img pt-1">
                <Image src={"/thunder.svg"} alt="icon" width={30} height={30} />
              </div>
              <h2 className=' font-bold text-xl lg:text-2xl'>
                Fast Performance
              </h2>
            </div>
            <p>Optimized assets and clean code
              deliver blazing fast load times
              for a seamless user experience.
              Speed is baked into every component.

            </p>
          </div>

        </div>
        <div className="5 shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:ease-in-out md:transform md:hover:scale-110 md:hover:z-10 bg-white">

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center ">
              <div className="img pt-1">
                <Image src={"/animation.svg"} alt="icon" width={30} height={30} />
              </div>
              <h2 className=' font-bold text-xl lg:text-2xl'>
                Smooth Animations
              </h2>
            </div>
            <p>Subtle transitions and animations enhance engagement
              without sacrificing performance.
              UI feels polished and responsive.
              Brings life to the user experience.

            </p>
          </div>

        </div>
        <div className="6 shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:ease-in-out md:transform md:hover:scale-110 md:hover:z-10 bg-white">

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center ">
              <div className="img pt-1">
                <Image src={"/brain.svg"} alt="icon" width={30} height={30} />
              </div>
              <h2 className=' font-bold text-xl lg:text-2xl'>
                Problem Solving Mindset
              </h2>
            </div>
            <p>Logical and analytical approach to
              resolving development challenges
              quickly and effectively.
              Focused on building real solutions.</p>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Speciality
