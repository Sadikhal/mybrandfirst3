import Link from 'next/link';
import React from 'react';

const MarketPlaceBanner = () => {
  return (
    <div className='py-10'>
      <div className='bg-black flex justify-center items-center mt-12 py-20'>
        <Link key="market" href='/'>
          <h2 className='leading-[1.1em] text-[44px] lg:leading-[1.5rem] font-teko font-normal'>
            Take a look at our{' '}
            <span className='underline underline-offset-2 text-[#FC8D00]' style={{ textDecorationColor: 'white' }}>
              marketplace strategy of company
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default MarketPlaceBanner;
