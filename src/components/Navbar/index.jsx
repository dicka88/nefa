import classNames from 'classnames';
import React, { useState } from 'react';
import { BsChevronDown, BsList, BsX } from 'react-icons/bs';
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';

import logo from '@/images/logo.svg';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownClass = classNames({
    'text-base left-0 top-full right-0 absolute transition-all duration-400': true,
    'invisible opacity-0': !dropdownOpen,
    'visible opacity-100': dropdownOpen,
  });

  return (
    <nav className={`relative transition-all duration-400 ${dropdownOpen ? 'bg-white' : 'bg-primary'} bg-opacity-5`}>
      <div className="sticky px-4 container mx-auto top-0 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} className="mr-6" alt="Neva" />
          <div className='hidden xl:flex'>
            <a href="/" className='mx-6 hover:text-primary'>Cryptocurrency</a>
            <a href="/" className='mx-6 hover:text-primary'>Exchanges</a>
            <a href="/" className='mx-6 hover:text-primary'>Watchlist</a>
            <a href="/" className='mx-6 hover:text-primary'>NFT</a>
            <a href="/" className='mx-6 hover:text-primary'>Portofolios</a>
            <a href="/" className='mx-6 hover:text-primary'>
              Product
              <BsChevronDown className="inline ml-2" />
            </a>
          </div>
        </div>
        <div className="hidden gap-4 md:flex">
          <SecondaryButton>
            Sign In
          </SecondaryButton>
          <PrimaryButton>
            Sign Up
          </PrimaryButton>
        </div>
        <div className="md:hidden text-2xl">
          <button className="z-50 p-4 block transition-all" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {dropdownOpen ?
              <BsX />
              :
              <BsList />
            }
          </button>

          {/* Menu dropdown */}
          <div className={dropdownClass}>
            <div className="h-screen left-0 bg-black bg-opacity-30">
              <OutsideClickHandler onOutsideClick={() => setDropdownOpen(false)}>
                <div className="z-20 shadow-xl bg-white p-6">
                  <div className="gap-4 flex mb-6">
                    <SecondaryButton className="w-full">
                      Sign In
                    </SecondaryButton>
                    <PrimaryButton className="w-full">
                      Sign Up
                    </PrimaryButton>
                  </div>
                  <div className="mb-4">
                    <div className="w-full">
                      <a href="/" className='hover:text-primary py-2 block'>Cryptocurrency</a>
                    </div>
                    <div className="w-full">
                      <a href="/" className='hover:text-primary py-2 block'>Exchanges</a>
                    </div>
                    <div className="w-full">
                      <a href="/" className='hover:text-primary py-2 block'>Watchlist</a>
                    </div>
                    <div className="w-full">
                      <a href="/" className='hover:text-primary py-2 block'>NFT</a>
                    </div>
                    <div className="w-full">
                      <a href="/" className='hover:text-primary py-2 block'>Portofolios</a>
                    </div>
                    <div className="w-full">
                      <a href="/" className='hover:text-primary py-2 flex justify-between'>
                        Product
                        <BsChevronDown className="inline ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </OutsideClickHandler>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
