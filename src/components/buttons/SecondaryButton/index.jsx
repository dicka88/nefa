import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
export default function SecondaryButton({ children, className, onClick, ...props }) {
  const cx = classNames([
    "border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-full py-3 px-6 md:py-4 md:px-10",
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

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  onClick: PropTypes.func
};

