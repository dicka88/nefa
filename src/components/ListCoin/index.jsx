import React from 'react';

import emoji from 'react-easy-emoji';
import { BsChevronRight } from 'react-icons/bs';

import CoinRow from './CoinRow';

export default function ListCoin({ title, more, data }) {
  return (
    <>
      <div className="flex justify-between mb-6">
        <span className="font-bold text-lg">{emoji(title, { props: { className: 'inline-block mr-4 text-normal' } })}</span>
        <a href={more} className="text-primary">
          More
          <BsChevronRight className="inline ml-2" />
        </a>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <span className='text-gray'>Name</span>
          <span className='text-gray'>Price</span>
          <span className='text-gray'>Chart</span>
        </div>
        {data.map(({ image, name, price, uptrend }) =>
          <CoinRow image={image} coinName={name} coinPrice={price} coinUpTrend={uptrend} />
        )}
      </div>
    </>
  );
}
