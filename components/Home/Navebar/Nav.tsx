"use client";
import ThemeToggle from "@/components/Helper/ThemeToggle";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [activeComponent, setActiveComponent] = useState<number | null>(null);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${navBg
        ? "bg-white dark:bg-[#0f142ed9] shadow-md"
        : "fixed"
        } duration-200 h-[12vh] z-10000 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* {logo} */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="hidden sm:flex md:text-2xl text-xl font-bold text-black dark:text-white overflow-hidden">
            {"Ansh Kumar".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block opacity-0 animate-name-reveal bg-gradient-to-r  from-blue-500 via-indigo-500 to-purple-500 bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                style={{
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>

        {/* {nav items} */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.path}
                onClick={() => {
                  const section = document.getElementById(link.url);
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group text-base font-medium text-black dark:text-white"
              >
                <span
                  className="
            inline-block
            transition-all duration-300 ease-out
            group-hover:-translate-y-[2px]
            group-hover:scale-105
            group-hover:bg-gradient-to-r
            group-hover:from-blue-500
            group-hover:via-indigo-500
            group-hover:to-purple-500
            group-hover:bg-[length:200%_auto]
            group-hover:bg-clip-text
            group-hover:text-transparent
            group-hover:animate-[shimmer_1.5s_linear_infinite]
          "
                >
                  {link.Label}
                </span>
              </Link>
            );
          })}
        </div>
        {/* <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.path}
                onClick={() => {
                  const section = document.getElementById(link.url);
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-base hover:text-indigo-700 text-black dark:text-white font-medium transition-all duration-200"
              >
                <p>{link.Label}</p> */}
        {/* <span className="
                 inline-block
    transition-all duration-300
    group-hover:-translate-y-1
    group-hover:scale-105
    group-hover:bg-gradient-to-r
    group-hover:from-blue-500
    group-hover:via-indigo-500
    group-hover:to-purple-500
    group-hover:bg-[length:200%_auto]
    group-hover:bg-clip-text
    group-hover:text-transparent
    group-hover:animate-[shimmer_1.5s_linear_infinite]
                "
                >
                  {link.Label}
                </span> */}
        {/* </Link>
            );
          })} 
        </div>*/}

        {/* buttons */}
        <div className="flex items-center space-x-4">

          {/* Blog Button */}
          <Link
            href="/blog"
            className="group relative inline-flex overflow-hidden rounded-[7px] p-[1px]"
          >
            {/* Animated border */}
            <span className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_90deg,#6366f1_180deg,#8b5cf6_240deg,transparent_320deg)]" />

            {/* Button content */}
            <span
              className="relative flex items-center justify-center gap-2 rounded-[6px] bg-blue-700 px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 group-hover:bg-blue-800 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
            >
              <GrUpdate className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />

              {/* Desktop only */}
              <span className="hidden sm:inline">
                Blog
              </span>
            </span>
          </Link>
          {/* Download CV */}
          <a download
            href="/CV/ansh-cv.pdf"
            className="group relative inline-flex items-center justify-center rounded-lg p-[1.5px] overflow-hidden"
          >
            {/* Animated Ring Border */}
            <span className=" absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_90deg,#6366f1_180deg,#8b5cf6_240deg,transparent_320deg)]" />
            {/* download button */}
            <span className="relative flex items-center justify-center gap-2 rounded-[7px] bg-blue-700 px-8 py-3.5 text-sm font-medium
                text-white transition-all duration-300 group-hover:bg-blue-800 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
            >
              <BiDownload className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />

              {/* Desktop only */}
              <span className="hidden sm:inline">
                Download CV
              </span>
            </span>
          </a>

          {/* Mobile Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className=" h-8 w-8 cursor-pointer text-black dark:text-white transition-transform duration-300 hover:scale-110 lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
