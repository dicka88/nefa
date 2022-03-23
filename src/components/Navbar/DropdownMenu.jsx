import classNames from 'classnames';
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import ClickOutComponent from 'react-onclickout';
import PropTypes from 'prop-types';

export default function DropdownMenu({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="hover:text-primary py-2 cursor-pointer flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        Product
        <BsChevronDown className="inline ml-2" />
      </span>
      <ClickOutComponent onClickOut={() => open && setOpen(false)}>
        <div className={classNames("lg:absolute top-full shadow-lg -left-1/2 -right-1/2 rounded-lg bg-white", {
          "opacity-100 visible h-full lg:h-auto py-4 px-6": open,
          "opacity-0 invisible h-0": !open
        })}>
          {children}
        </div>
      </ClickOutComponent >
    </div>
  );
}

DropdownMenu.propTypes = {
  children: PropTypes.node
};
