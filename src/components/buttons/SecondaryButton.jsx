import classNames from 'classnames';
import React from 'react';

export default function SecondaryButton({ children, className, onClick, ...props }) {
  const cx = classNames([
    "border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-full py-4 px-10",
    className
  ]);

  return (
    <button
      onClick={onClick}
      className={cx}
      {...props}
    >
      {children}
    </button>
  );
}
