"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react'

const booldImage = [
    "/images/bood-login.png",
    "/images/blood-admin.png",
    "/images/blood-donar.png",
];

const authImage = [
    "/images/auth-login.png",
    "/images/auth-sign.png",
    "/images/auth-forget.png",
];
const doctorconsultationImage = [
    "/images/doctorConsultationHome.png",
    "/images/doctorConsultationLogin.png",
    "/images/doctorConsultationAdmin.png",
];
const ecommerceImage = [
    "/images/",
    "/images/",
];

const Project = () => {
    const [bloodIndex, setBloodIndex] = useState(0);
    const [authIndex, setAuthIndex] = useState(0);
    const [doctorIndex, setDoctorIndex] = useState(0);
    const [ecomIndex, setEcomIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBloodIndex((prev) => (prev + 1) % booldImage.length);
            setAuthIndex((prev) => (prev + 1) % authImage.length);
            setDoctorIndex((prev) => (prev + 1) % doctorconsultationImage.length);
            setEcomIndex((prev) => (prev + 1) % ecommerceImage.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="pt-16 pd-16" id='Project'>
            <h1 className='text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white'>
                A Small selection of resent <br />
                <span className='text-indigo-400'>projects</span>
            </h1>
            <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
                {/* <div> */}
                {/* <Link href=""> */}
                {/* className='bg-gray-800 p-6 rounded-lg shadow-lg' */}
                {/* <Image */}
                {/* // src="/images/p1.jpg"
                        // alt="img"
                        // width={800}
                        // height={650}
                        // className='rounded-lg' /> */}
                {/* <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'> */}
                {/* Modern Finance Dashboard</h1> */}
                {/* <h1 className='pt-2 font-medium text-white/80'> */}
                {/* Apps , UI/UX */}
                {/* </h1> */}
                {/* </Link> */}
                {/* </div> */}
                {/* first project */}
                <div data-aos="fade-up" data-achor-placement="top-center" data-aos-delay="0" >
                    <Link href="https://chatbot-nine-nu-87.vercel.app/" target='_blank'>
                        <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                            <Image
                                src="/images/chatbot.png"
                                alt="img"
                                fill
                                className='rounded-lg' />
                        </div>
                        <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                            ChatBot using Google API</h1>
                        <h1 className='pt-2 font-medium text-white/80'>
                            Apps , UI/UX
                        </h1>
                    </Link>
                </div>
                {/* second project */}
                <div data-aos="fade-up" data-achor-placement="top-center" data-aos-delay="200" >
                    <Link href="https://authentication-frontend-lac.vercel.app/" target="-_blank">
                        <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                            <Image
                                src={authImage[authIndex]}
                                alt="img"
                                fill
                                className='rounded-lg' />
                        </div>
                        <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                            Complete authentication system </h1>
                        <h1 className='pt-2 font-medium text-white/80'>
                            Apps , UI/UX
                        </h1>
                    </Link>
                </div>
                {/* third project */}
                <div data-aos="fade-up" data-achor-placement="top-center" data-aos-delay="300" >
                    <Link href="https://blood-bank-app-frontend-alpha.vercel.app/" target='_blank'>
                        <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                            <Image
                                src={booldImage[bloodIndex]}
                                alt="img"
                                fill
                                className='rounded-lg' />
                        </div>
                        <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                            Blood Bank Web Application</h1>
                        <h1 className='pt-2 font-medium text-white/80'>
                            Apps , UI/UX
                        </h1>
                    </Link>
                </div>
                {/* fourth project add */}
                <div data-aos="fade-up" data-achor-placement="top-center" data-aos-delay="300" >
                    <Link href="https://doctor-consultation-app-sigma.vercel.app/" target='_blank'>
                        <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                            <Image
                                src={doctorconsultationImage[doctorIndex]}
                                alt="img"
                                fill
                                className='rounded-lg' />
                        </div>
                        <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                            Doctor Consultation Platform</h1>
                        <h1 className='pt-2 font-medium text-white/80'>
                            Apps , UI/UX
                        </h1>
                    </Link>
                </div>
                {/* five project add */}
                <div
                    data-aos="fade-up"
                    data-achor-placement="top-center"
                    data-aos-delay="300"
                >
                    <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-gray-800/60 border border-white/10 flex items-center justify-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Coming Soon
                        </h2>
                    </div>

                    <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                        Ecommerce Platform
                    </h1>

                    <h1 className="pt-2 font-medium text-white/80">
                        Apps, UI/UX, Web App
                    </h1>
                </div>
                {/* <div data-aos="fade-up" data-achor-placement="top-center" data-aos-delay="300" >
                    <Link href="https://doctor-consultation-app-sigma.vercel.app/" target='_blank'>
                        <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                            <Image
                                src={ecommerceImage[ecomIndex]}
                                alt="img"
                                fill
                                className='rounded-lg' />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Coming Soon
                        </h2>
                        <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                            Ecommerce Platform</h1>
                        <h1 className='pt-2 font-medium text-white/80'>
                            Apps , UI/UX, Web App
                        </h1>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Project
