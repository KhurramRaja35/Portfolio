"use client"

import React  from 'react'

const Skills = () => {
    const languages = [
        {
            name: 'HTML/CSS',
            percentage: 90,
            color: 'bg-[#6E50F0]'
        },
        {
            name: 'JavaScript',
            percentage: 86,
            color: 'bg-[#6E50F0]'
        },
        {
            name: 'React',
            percentage: 81,
            color: 'bg-[#6E50F0]'
        }
        ,
        {
            name: 'TailwindCSS',
            percentage: 90,
            color: 'bg-[#6E50F0]'
        }
        ,
        {
            name: 'Next.js',
            percentage: 85,
            color: 'bg-[#6E50F0]'
        }
        ,
        {
            name: 'GSAP',
            percentage: 80,
            color: 'bg-[#6E50F0]'
        }
        ,
        {
            name: 'Git/Github',
            percentage: 75,
            color: 'bg-[#6E50F0]'
        }
        ,
        {
            name: 'Node.js',
            percentage: 45,
            color: 'bg-[#6E50F0]',
        }
        ,
        {
            name: 'Wordpress/Elementor',
            percentage: 85,
            color: 'bg-[#6E50F0]'
        }
        ,
        {
            name: 'WooCommerce',
            percentage: 80,
            color: 'bg-[#6E50F0]'
        }
        ,
        {
            name: 'MongoDB',
            percentage: 25,
            color: 'bg-[#6E50F0]'
        }
        ,
        {
            name: 'Postman',
            percentage: 25,
            color: 'bg-[#6E50F0]'
        }
        ,
        {
            name: 'Typescript',
            percentage: 10,
            color: 'bg-green-500',
            learning: true
        },
        {
            name: 'Express.js',
            percentage: 40,
            color: 'bg-green-500',
            learning: true
        },
        {
            name: 'SQL',
            percentage: 10,
            color: 'bg-green-500',
            learning: true
        }
    ]


    

    return (
        <section className=' py-8 md:py-10 lg:py-15 flex flex-col gap-6'>
            <div className="flex flex-col gap-3 md:gap-4 md:items-center text-center" >

                <div className="1 text-xl md:text-2xl font-bold text-[#9A87F4]">
                    My Skills
                </div>
                <div className="2 text-3xl md:text-6xl font-bold ">
                    I Develop Skills Regularly
                </div>
                <div className="desc w-[95%] lg:w-[80%] mx-auto line-clamp-3  md:line-clamp-2  md:text-center text-justify">
                    Highlighting my journey of continuous learning, showcasing expertise in web development while exploring new technologies. I stay updated with the latest trends, ensuring my skills evolve to meet your project needs effectively.
                </div>
            </div>


            <div className="w-[90%] md:w-[80%] mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                    {languages.map((language, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 font-medium text-sm">
                                    {language.name}
                                </span>
                                <span className="text-red-400 font-medium text-sm">
                                    {language.learning ? "Learning" : `${language.percentage}%`}
                                </span>

                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className={`${language.color} h-2 rounded-full transition-all duration-500 ease-out`}
                                    style={{ width: `${language.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skills

// `