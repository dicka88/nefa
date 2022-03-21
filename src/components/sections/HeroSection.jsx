import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

import globoCrypto from '@/images/illustrations/globe.png';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';

export default function HeroSection() {
  return (
    <section className='bg-primary bg-opacity-5 pt-8 pb-16 md:pt-0'>
      <div className="container px-4 mx-auto grid md:grid-cols-2">
        <div className='flex items-center'>
          <div>
            <p className='text-primary'>SIGN UP TODAY</p>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-normal'>
              The World’s <br />
              <span className='text-blue-gradient'>Fastest Growing</span> <br />
              Crypto Web App
            </h1>
            <div className="mt-4 mb-8">
              <p className="text-gray">Buy and sell 200+ cryptocurrencies with 20+ flat currencies using</p>
              <p className="text-gray">bank transfers or your credit/debit card.</p>
            </div>
            <div className="col-span-2 lg:flex lg:mb-12">
              <PrimaryButton className="w-full mb-2 mr-4">
                Get Started
              </PrimaryButton>
              <SecondaryButton className="w-full">
                Download App
                <BsChevronDown className="inline ml-2" />
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={globoCrypto} alt="Globe" />
        </div>
      </div>
    </section >
  );
}
