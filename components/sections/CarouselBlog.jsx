'use client'
import React, { useState } from 'react';
import { ArrowLeft,ArrowRight,ChevronLeft,ChevronRight,Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { RxDotFilled } from 'react-icons/rx';
import Link from 'next/link';

const CarouselBlog = () => {
  const slides = [
    {
      url: '/blog/blog501.jpg',
    },
   
    // {
    //   url: '/blog/blog502.png',
    // },
   
    {
      url: '/blog/blog503.jpg',
    },
    {
      url: 'blog/blog9.avif',
    },
   
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div  className='lg:h-[650px] h-full w-full   relative group'>
      <div
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slides[currentIndex].url})` }}
        className='w-full sm:h-[440px]  md:h-[500px] lg:h-screen  bg-center bg-cover duration-500 h-[380px] '
      >
        <div className='flex justify-center h-full items-center '>
          <div className='text-center gap-12 sm:w-4/5 px-3 sm:px-0'>
                <div className='uppercase tracking-[3px] text-[13px] font-[700] text-foreground hover:text-[#FC8D00] font-raleway cursor-pointer'>
                  digital marketing
                </div>

                <div className='text-[36px] leading-[44px] font-playfair_display tracking-[1px] capitalize py-5 cursor-pointer text-foreground hover:text-[#FC8D00] font-[700] z-1 opacity-100'>
                  <h1>imporatnce of digital marketing in today's world</h1>
                </div>

                <Link key='/blog/252' href='/blog/252' className='leading-[24.6px] font-open_sans  cursor-pointer text-foreground hover:text-[#FC8D00] hidden md:block'>
                <p>Digital marketing has become increasingly crucial in today's world due to the widespread use of the internet and digital devices.Digital marketing is a dynamic and essential component of modern business strategies...</p>
                </Link>

                <Link key='/blog/252' href='/blog/252' className='block text-[15px] font-open_sans py-8 '>
                  <Button className="bg-transparent border-[1.5px] text-foreground uppercase font-[700] tracking-[3px] px-6 py-6 hover:bg-transparent rounded-none hover:text-[#FC8D00] hover:border-[#FC8D00] hover:border-1 border-foreground">
                    Read More
                  </Button>
                </Link>

                <div className='font-raleway text-[15px] sm:pt-3 pb-4 md:pb-0'>
                  March 19, 2024
                </div>
          </div>

        </div>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] transition-all left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-all'>
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-5 -mt-10 justify-center md:py-3 py-4'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselBlog;