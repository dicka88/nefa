import classNames from 'classnames';
import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

import star from '@/images/particles/star1.svg';

export default function StarParticle({ className }) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={star} />
    </span>
  );
}

StarParticle.propTypes = {
  classNames: PropTypes.string
};
