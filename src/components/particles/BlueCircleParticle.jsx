import React from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';

import blueCircle from '@/images/particles/circle1.svg';

export default function BlueCircleParticle({ className }) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={blueCircle} />
    </span>
  );
}
