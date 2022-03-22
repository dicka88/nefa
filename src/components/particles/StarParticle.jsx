import classNames from 'classnames';
import React from 'react';
import { ReactSVG } from 'react-svg';

import star from '@/images/particles/star1.svg';

export default function StarParticle({ className }) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={star} />
    </span>
  );
}
