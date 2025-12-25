import React from 'react'
import Image from 'next/image'

const Service = () => {
  return (
    <section id='services' className='mx-4 md:mx-10 flex flex-col gap-10  py-10 md:py-12 lg classname="md:w-10 md:h-10":py-15'>

      <div className=" flex flex-col gap-3 items-center text-center">
        <div className="1 text-[#9A87F4] text-xl lg:text-3xl text-center font-bold">
          Services
        </div>
        <div className="2 text-3xl md:text-6xl font-bold">
          What I Frequently Do to
        </div>
        <div className="3 text-3xl md:text-6xl font-bold">
          Serve My Clients
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
            <p>I create modern, responsive websites with React and TailwindCSS tailored to your vision. Offer captivating landing pages, sleek company websites, and interactive contact forms.</p>


          </div>
        </div>

        <div className="2 shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:transform md:hover:scale-110 md:hover:z-10 bg-white ">

          <div className="flex flex-col gap-3">
             <div className="flex gap-3 items-center">
              <div className="img pt-1">
                <Image src={"/layout.svg"} alt='icon' width={30} height={30} />
              </div>
              <div className='font-bold text-xl lg:text-2xl'>
                Static Site Generation & SEO 
              </div>
            </div> 
            
            <p>
              I build fast, search-friendly websites with Next.js 15 to boost your online presence. Includes efficient page building, metadata for better visibility, and smooth performance.
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
                UI to Code Conversion
              </div>
            </div>
            <p>
              I transform designs or clone websites with TailwindCSS and React/Next.js precision.Convert Figma/Adobe XD/PSD files to functional components or replicate sites with responsive UI.
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
                Custom Portfolio Website
              </div>
            </div>
            <p>I craft standout portfolio websites for developers, designers, and professionals using React/Next.js 15.Offer personalized sites, resume-style layouts, and fully responsive designs.</p>
          </div>

        </div>



        <div className="5 shadow-lg py-3 px-2 md:px-1 lg:px-4 rounded-md border-3 border-[#F45C70] md:transition-transform md:duration-500 md:transform md:hover:scale-110 md:hover:z-100 hover:shadow-xl bg-white">

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <div className="img pt-1">
                <Image src={"/s2.png"} alt='icon' width={30} height={30}/>
              </div>
              <div className='font-bold text-xl lg:text-2xl'>
                React to Next.js Migration
              </div>
            </div>
            <p>I’ll migrate your React app to Next.js, enhancing performance with SSR/SSG, optimizing components, adding API routes and MongoDB if needed, and boosting SEO while preserving functionality and design.</p>
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
            <p>I develop robust fullstack apps with Next.js to power your vision - Next.js API routes + MongoDB for seamless data handling. Includes secure auth, admin dashboards & custom CRUD APIs in one scalable package.</p>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Service
