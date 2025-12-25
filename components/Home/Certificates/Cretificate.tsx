"use client";
import { CertificateDetail } from '@/constant/CertificateDetail';
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react'

const colors = [
    "bg-red-600/20 text-red-400",
    "bg-blue-600/20 text-blue-400",
    "bg-green-600/20 text-green-400",
    "bg-yellow-600/20 text-yellow-400",
    "bg-purple-600/20 text-purple-400",
];
const Cretificate = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="pt-16 pd-16" id='certificate'>
            <h1 className='text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white'>
                My Career <br />
                <span className='text-indigo-400'>Highlights</span>
            </h1>
                <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            {CertificateDetail.map((item) => (
                    <div
                        key={item.id}
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-[2px] hover:from-indigo-500/30 hover:to-indigo-700/30 transition-all duration-300"
                    >
                        <Link
                            href="https://your-certificate-link.com"
                            target="_blank"
                            className="block rounded-2xl bg-black/40 backdrop-blur-xl p-4 hover:bg-black/50 transition-all duration-300 h-full"
                        >
                            {/* IMAGE */}
                            <div className="overflow-hidden rounded-xl">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={800}
                                    height={600}
                                    className="rounded-xl group-hover:scale-105 duration-500 ease-out"
                                />
                            </div>

                            {/* TITLE */}
                            <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-white tracking-wide group-hover:text-green-400 transition">
                                {/* Certificate of Achievement */}
                                {item.title}
                            </h1>

                            {/* SHORT DESCRIPTION */}
                            <p className="pt-2 text-white/80 text-sm sm:text-base leading-relaxed">
                                {/* Successfully completed the advanced program covering modern web
                                technologies, clean UI/UX principles and efficient development workflows. */}
                                {item.description}
                            </p>

                            {/* TAGS */}
                            <div className="mt-3 flex gap-2 flex-wrap">
                                {item.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className={`px-3 py-1 text-xs  rounded-full ${colors[tagIndex % colors.length]}`}>
                                        {tag}
                                    </span>

                                ))}
                            </div>
                        </Link>
                    </div>
            ))}
                </div>

        </div >

    )
}


export default Cretificate
