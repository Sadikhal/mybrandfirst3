import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <div className='mt-8'>
      <div className='h-[320px] py-2 w-full bg-[#FC8D00]'>
        <div className='flex flex-col lg:flex-row lg:justify-between justify-center items-center text-foreground h-full mx-3 px-2 lg:gap-0 gap-5'>
          <div className='lg:flex-1 mb-2 lg:mb-0'>
            <h2 className='xl:text-[70px] xl:leading-[.85em] font-teko text-[36px] leading-[1em] md:text-[48px] font-normal uppercase text-slate-900'>
              WE’RE READY TO BRING BIGGER <br/>
              & STRONGER SEO PROJECTS
            </h2>
          </div>
          <div className='lg:flex-[0.8] text-right'>
            <Link href='/contact'>
              <Button size='hero' className='font-teko leading-30 font-normal text-18 tracking-widest text-foreground bg-black hover:text-black hover:bg-foreground'>
                contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Hero;
