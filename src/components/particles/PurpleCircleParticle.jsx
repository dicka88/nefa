import React from 'react';
import classNames from 'classnames';

import purpleCircle from '@/images/particles/circle2.svg';
import { ReactSVG } from 'react-svg';

export default function PurpleCircleParticle({ className }) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={purpleCircle} />
    </span>
  );
}
