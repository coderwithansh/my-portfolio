"use client";
import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect'
import ParticleHero from './ParticleBackground';

const Hero = () => {
    return (
        <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col' id='Hero'>
            <ParticleHero />
            <div className='relative z-10 flex flex-col items-center'>
                <Image
                    src="/images/myPhoto.png"
                    alt="heroImage"
                    width={150} height={150}
                    className='rounded-full border-8 border-[#0c0c48aa]'
                    data-aos="fade-up"
                />
                <h1 data-aos="fade-up" data-aos-delay="200"
                    className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide'>
                    Creating web products, <br /> Brands,
                    <span className='text-indigo-400'> and Experiences.</span>
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="400"
                    className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
                    Hi! I&apos;m Ansh Kumar, A Passionate
                    <span className=' text-indigo-400'>
                        <Typewriter options={{
                            strings: ['Full-Stack Developer',
                                'MERN Stack Developer',
                                'Web Developer'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                            wrapperClassName: 'pl-2',
                        }} />
                    </span>
                </h2>
                <button
                    data-aos="fade-up" data-aos-delay="600"
                    className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300
                    cursor-pointer rounded-full text-lg font-medium'
                    onClick={() => {
                        const section = document.getElementById("Project");
                        section?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <span>See my work</span>
                    <BsArrowRight className='inline-block ml-2 w-5 h-5' />
                </button>
            </div>
        </div>
    )
}

export default Hero
