"use client";
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: FaGithub, link: "https://github.com/coderwithansh" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/ansh-dewangan-570b99329" },
  { icon: FaInstagram, link: "https://www.instagram.com/i_m_ansh19/?__pwa=1#" },
  { icon: FaTwitter, link: "https://x.com/AnshDewang50812" },
];
const Footer = () => {
  return (
    <footer className="w-full mt-20 border-t border-white/10 bg-gradient-to-tr from-[#0d0d1f] via-[#1b1b33] to-[#0d0d1f]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Left */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-semibold text-white tracking-wide">
            Ansh Kumar Dewangan
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Building modern & beautiful web experiences.
          </p>
        </div>

        {/* Center – Links */}
        <div className="flex gap-6 text-gray-300 text-sm">
          <Link href="#"
          onClick={() => {
                  const section = document.getElementById("Resume");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
            className="hover:text-white hover:underline hover:decoration-1.6 underline-offset-4 transition">
            About
          </Link>
          <Link href="#"
          onClick={() => {
                  const section = document.getElementById("Project");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
            className="hover:text-white hover:underline hover:decoration-1.6 underline-offset-4 transition">
            Projects
          </Link>
          <Link href="#"
          onClick={() => {
                  const section = document.getElementById("Contact");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
            className="hover:text-white hover:underline hover:decoration-1.6 underline-offset-4 transition">
            Contact
          </Link>
        </div>

        {/* Right – Social Icons */}
        <div className="flex items-center gap-5">
          {socials.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                className="w-11 h-11 flex items-center justify-center 
                rounded-full bg-white/5 border border-white/10 text-white
                hover:bg-indigo-500/20 hover:border-indigo-500/40
                transition-all backdrop-blur-xl"
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center py-5 border-t border-white/10 text-gray-500 text-xs">
        © {new Date().getFullYear()} Ansh Kumar Dewangan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer
