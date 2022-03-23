import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

import logo from '@/images/logo.svg';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import Menus from './Menus';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [backgroundwhite, setBackgroundWhite] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: '768px' });

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  const handleBlackScreenClick = (e) => {
    e.stopPropagation();
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (isMobile) {
      setDropdownOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    setBackgroundWhite(dropdownOpen);
  }, [dropdownOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <nav className={classNames('fixed w-full transition-all duration-700 z-10 py-8 ', {
      'bg-white shadow-lg !py-3': backgroundwhite
    })}>
      <div className="px-4 container mx-auto top-0 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} className="mr-6" alt="Neva" />
          <div className='hidden mx-4 gap-8 xl:flex'>
            <Menus />
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
          <div className={classNames({
            'text-base left-0 top-full right-0 absolute transition-all duration-400': true,
            'invisible opacity-0': !dropdownOpen,
            'visible opacity-100': dropdownOpen,
          })}>
            <div className="h-screen left-0 bg-black bg-opacity-30" onClick={handleBlackScreenClick}>
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
                  <Menus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
