"use client";
import React from 'react'
import { BiLogoJava } from 'react-icons/bi';
import { SiGithub, SiJavascript, SiMysql, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const Slikks = [
    {
        name: 'javaScript',
        icon: <SiJavascript />,
        parcentage: 80,
    },
    {
        name: 'React.Js',
        icon: <SiReact />,
        parcentage: 92,
    },
    {
        name: 'Next.Js',
        icon: <SiNextdotjs />,
        parcentage: 90,
    },
    {
        name: 'Node.Js',
        icon: <SiNodedotjs />,
        parcentage: 80,
    },
    {
        name: 'SQl',
        icon: <SiMysql />,
        parcentage: 80,
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
        parcentage: 94,
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript />,
        parcentage: 86,
    },
    {
        name: 'Git & GitHub',
        icon: <SiGithub />,
        parcentage: 90,
    },
    {
        name: 'Python',
        icon: <SiPython />,
        parcentage: 75,
    },
    {
        name: 'Java',
        icon: <BiLogoJava />,
        parcentage: 75,
    },
]
const Skills = () => {
    return (
        <div className="text-white pt-16 pd-16" id="Skills">
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                My <span className='text-indigo-400'> Skills</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-6 mt-16">
                {Slikks.map((skill, i) => {
                    return <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                        <div
                            data-aos="flip-right" data-achor-placement="top-center" data-aos-delay={i * 100}
                            className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center
                        justify-center shadow-lg transition hover:scale-105'>
                            <div className='text-5xl md-4 text-gray-300'>{skill.icon}</div>
                            <p className='text-2xl font-semibold'>{skill.parcentage}</p>
                            <p className='text-purple-400 mt-1'>{skill.name}</p>

                        </div>
                    </Tilt>
                })}

            </div>
        </div>
    )
}

export default Skills
