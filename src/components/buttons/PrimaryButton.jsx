import classNames from 'classnames';
import React from 'react';

export default function PrimaryButton({ children, className, onClick, ...props }) {
  const cx = classNames([
    "text-white rounded-full py-4 px-10 bg-gradient-to-br from-primary to-secondary",
    className
  ]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}
