import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import OutsideClickHandler from 'react-outside-click-handler';
import classNames from 'classnames';

import SecondaryButton from '../SecondaryButton';

export default function DropdownButton({ className, name, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <SecondaryButton className={className} onClick={() => setIsOpen(!isOpen)}>
        {name}
        <BsChevronDown className="inline ml-2" />
      </SecondaryButton>
      <OutsideClickHandler onOutsideClick={() => isOpen && setIsOpen(false)}>
        <div data-testid="dropdown" className={
          classNames('absolute left-0 right-0 top-full transition-all duration-200 z-[1] overflow-hidden mt-2 border border-primary rounded-3xl bg-white shadow-xl', {
            'opacity-100 visible': isOpen,
            'opacity-0 invisible': !isOpen
          })}>
          {children}
        </div>
      </OutsideClickHandler>
    </div>
  );
}
