import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Project.module.css';
import Link from 'next/link';

const Project = () => {
    const items = [
        {
            position: 1,
            image: "/Passop.png",
            title: "PassOP - Pasword Manager",
            description: "PassOP is a simple and secure web-based password manager built using React and Tailwind CSS. It allows users to store and manage their login credentials — including Website URL, Username, and Password — directly in the browser using localStorage.",
            liveLink: "https://passop-kbr.netlify.app/",
            githubLink: "https://github.com/KhurramRaja35/Pass0P-PasswordManager",
        },
        {
            position: 2,
            image: "/Bitlinks.png",
            title: "BitLinks - Url Shortner",
            description: "A simple and efficient URL shortener built for fast and reliable link sharing.",
            liveLink: "https://bit-links-xi.vercel.app/",
            githubLink: "https://github.com/KhurramRaja35/BitLinks",
        },
        {
            position: 3,
            image: "/Bittree.png",
            title: "BitTree - Link Aggregator",
            description: "Bittree is a simple and elegant tool that lets you organize your online presence by gathering all your social, personal, and professional links in one place. Perfect for bios, portfolios, and digital business cards.",
            liveLink: "https://bit-tree-delta.vercel.app/",
            githubLink: "https://github.com/KhurramRaja35/BitTree",
        },
        {
            position: 4,
            image: "/todo.png",
            title: "DailyDo - Task Manager",
            description: "A sleek and responsive to-do list app built with React.js and Tailwind CSS, deployed on Netlify.",
            liveLink: "https://daily-do-tm.netlify.app/",
            githubLink: "https://github.com/KhurramRaja35/DailyDo-",
        },
        {
            position: 5,
            image: "/player.png",
            title: "Spotify Inspired Music Player",
            description: "A web-based music player inspired by Spotify, built using HTML, CSS, and JavaScript. Features include song playback, playlists, and a user-friendly interface.",
            liveLink: "https://kbr-music-player.netlify.app/",
            githubLink: "https://github.com/KhurramRaja35/spotify-like-music-player",
        },
        {
            position: 6,
            image: "/dashboard.png",
            title: "Next Dashboard",
            description: "Build Dashboard App By Next.js 15, Drizzle ORM and Shadcn",
            liveLink: "#",
            githubLink: "#",
        }
    ];
    return (
        <section id='work' className=' flex flex-col gap-6 py-10  md:py-15 lg:py-20'>
            <div className="w-[95%] mx-auto flex flex-col gap-4 items-center md:text-center" >

                <div className="1 text-xl md:text-2xl font-bold text-[#9A87F4]">
                    I'm a Developer
                </div>
                <div className="2 text-3xl md:text-6xl font-bold text-center">
                    Check My Amazing Work
                </div>
                <div className="desc w-full lg:w-[60%] mx-auto md:line-clamp-2 line-clamp-4 text-justify md:text-center font-thin">
                    Explore my portfolio showcasing modern websites and fullstack solutions built with React, Next.js, TailwindCSS and MongoDB. See how I turn ideas into high-quality, user-friendly digital experiences!
                </div>
            </div>

            <div className="carosel mx-5">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    className="w-full "
                    breakpoints={{
                        0: {         // mobile
                            slidesPerView: 1,
                        },
                        640: {       // small tablets
                            slidesPerView: 2,
                        },
                        1024: {      // large tablets/small desktops
                            slidesPerView: 3,
                        },
                        1280: {      // large desktops
                            slidesPerView: 4,
                        },
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`w-full py-3 px-3 transition-all duration-500 ${item.position % 2 === 0 ? 'md:mt-14' : 'md:mt-4'} border-2 border-[#F45C70] rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:z-10 bg-white shadow-md`}
                            >
                                <div
                                    className=" h-30  rounded-lg overflow-hidden bg-center bg-no-repeat bg-cover lg:bg-contain"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
                                ></div>
                                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                                <p className="mt-1 line-clamp-2 text-sm text-gray-600 font-thin">{item.description}</p>
                                <div className="mt-2 flex  gap-2">
                                    <Link target='_blank' href={item.liveLink} className="text-white bg-[#F45C70] active:bg-[#d3485a] hover:bg-[#f8909e] py-1 px-4 rounded-full font-semibold">Live Link</Link>
                                    <Link target='_blank' href={item.githubLink} className="text-white bg-[#6E50F0] hover:bg-[#a592fa] active:bg-[#6248d8] py-1 px-3 rounded-full font-semibold">View Code</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Project
