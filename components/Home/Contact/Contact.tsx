import React from 'react'
import ContactPage from './ContactPage'

const Contact = () => {
  return (
    <div id='Contact'>
         <div className='pt-16 pd-16' data-aos="zoom-out" data-achor-placement="top-center" data-aos-delay="0">
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'data-aos="fade-up" data-achor-placement="top-center" data-aos-delay="100">
                Contact 
                <span className='text-indigo-400'> Me </span>
            </h1>
            </div>
      <ContactPage />
    </div>
  )
}

export default Contact
