"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Project from './Projects/Project'
import Skills from './Skills/Skills'
// import ClientReview from './ClientReview/ClientReview'
import Contact from './Contact/Contact'
import AOS from "aos";
import "aos/dist/aos.css";
// import Cretificate from './Certificates/Cretificate';

const Home = () => {

  useEffect(() => {
  const initADS = async () => {
    await import("aos");
    AOS.init({
      duration: 1000,
      once: true,
    });
  };
  initADS();
}, []);
  return (
    <div className='overflow-hidden'>
      <Hero />  
      <Services /> 
      <Resume />
      <Project />
      <Skills />
      {/* <Cretificate /> */}
      {/* <ClientReview /> */}
      <Contact />
      
    </div>
  )
}

export default Home
