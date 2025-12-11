"use client";
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReviewCart from './ClientReviewCart';
import TestimonialsSection from './ClientReviewCart';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slideToSide: 1
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const ClientReview = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                Kind words from satisfied <br />
                <span className='text-indigo-400'>Clients</span>
            </h1>
            <div className='mt-16 w-[70%] mx-auto'>
                <Carousel
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                >
                    {/* <TestimonialsSection /> */}
                   <ClientReviewCart image="/Images/c1.png" name="jon bosco" role="CEO" review="Amazing experience! Smooth UI and clean code."/> 
                   <ClientReviewCart image="/Images/c2.png" name="jon bosco" role="CEO" review="Amazing experience! Smooth UI and clean code."/> 
                   <ClientReviewCart image="/Images/c3.png" name="jon bosco" role="CEO" review="Amazing experience! Smooth UI and clean code."/> 
                </Carousel>;
            </div>
        </div>
    )
}

export default ClientReview
