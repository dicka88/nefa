import React from 'react';
import classNames from 'classnames';

import orangeCircle from '@/images/particles/circle3.svg';
import { ReactSVG } from 'react-svg';

export default function OrangeCircleParticle({ className }) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={orangeCircle} />
    </span>
  );
}
