import classNames from 'classnames';
import React from 'react';

export default function PrimaryButton({ children, className, onClick, ...props }) {
  return (
    <button onClick={onClick} className={classNames(
      "text-white rounded-full py-3 px-6 md:py-4 md:px-10 bg-gradient-to-br hover:bg-gradient-to-r transition-all duration-300 from-primary to-secondary hover:bg-blend-darken",
      className
    )}
      {...props}
    >
      {children}
    </button >
  );
}
