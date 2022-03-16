import React from 'react';
import upChart from '../../images/charts/up.svg';
import downChart from '../../images/charts/down.svg';

export default function CoinRow({ image, coinName, coinPrice, coinUpTrend }) {
  return (
    <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray last:border-none">
      <div className="flex items-center">
        <img className='inline h-[1em] mr-2' draggable="false" src={image} />
        {coinName}
      </div>
      <div className='flex items-center'>
        {coinUpTrend ?
          <span className='text-green mr-1'>+</span>
          :
          <span className='text-red mr-1'>-</span>
        }
        {coinPrice}
      </div>
      <div>
        <img src={coinUpTrend ? upChart : downChart} alt="" />
      </div>
    </div>
  );
}
