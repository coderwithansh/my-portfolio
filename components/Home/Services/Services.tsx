import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div className='pt-16 pd-16' id='Services'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                Colleborate with brand
                <br /> and agencies to creater
                <br /> impactfull results
            </h1>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 
            gap-10 mt-20 items-center' >
                <div data-aos="fade-right" data-achor-placement="top-center">
                    <ServiceCard
                        icon="/Images/s1.png"
                        name="UI and UX"
                        description="Designing interface that are intuitive, and enjoyable for users."
                    />
                </div>
                <div 
                data-aos="fade-right" data-achor-placement="top-center" data-aos-delay="100">
                    <ServiceCard
                        icon="/Images/s2.png"
                        name="Web and Mobile App "
                        description="Designing interface that are intuitive, and enjoyable for users."
                    />
                </div>
                <div data-aos="fade-right" data-achor-placement="top-center" data-aos-delay="200">
                    <ServiceCard
                        icon="/Images/s3.png"
                        name="Design and Creative"
                        description="Designing interface that are intuitive, and enjoyable for users."
                    />
                </div>
                <div data-aos="fade-right" data-achor-placement="top-center" data-aos-delay="300">
                    <ServiceCard
                        icon="/Images/s4.png"
                        name="Development"
                        description="Designing interface that are intuitive, and enjoyable for users."
                    />
                </div>
            </div>
        </div>
    )
}

export default Services
