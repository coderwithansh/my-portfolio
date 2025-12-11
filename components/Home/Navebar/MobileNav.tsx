import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react'
import { CgClose } from 'react-icons/cg';


type Props = {
    showNav: boolean,
    closeNav: () => void
};
const MobileNav = ({ showNav, closeNav }: Props) => {

    const openNav = showNav ? "translate-x-0" : "translate-x-[100%]";
    return (
        <div>
            {/*overLay*/}
            <div className={`fixed inset-0 ${openNav}  transform transition-all right-0 duration-500 z-[100002] bg-black
             opacity-70 w-full h-screen`}></div>
            <div className={`text-white ${openNav} fixed justify-center flex flex-col h-full transform transition-all
        duration-500 delay-300 w-[80%] sa:w-[60] bg-indigo-700 space-y-6 z-[100056] right-0`}>
                {NavLinks.map((link) => {
                    return (
                        <Link
                            key={link.id}
                            href="#"
                            onClick={() => {
                                    const section = document.getElementById(link.url);
                                    section?.scrollIntoView({ behavior: "smooth" });
                                    closeNav();
                                }}
                            className=" w-fit text-xl ml-12  sm:text-[30px] hover:text-blue-300 transition-all duration-200"
                            >
                            <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
                                {link.Label}
                            </p>
                        </Link>
                    );
                })}
                {/* cross icon */}
                <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />

            </div>
        </div>
    )
}

export default MobileNav
