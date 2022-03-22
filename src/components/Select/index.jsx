import classNames from 'classnames';
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Select({ onChange, value = "BTC" }) {
  const data = [{
    name: 'BTC',
    code: 'BTC',
    icon: '/cryptocurrencies/btc.svg'
  }, {
    name: 'USD',
    code: 'USD',
    icon: '/cryptocurrencies/usd.svg'
  }, {
    name: 'ETH',
    code: 'ETH',
    icon: '/cryptocurrencies/etherium.png'
  }];

  // find initial coin
  const initialCoin = data.find(({ code }) => code === value);

  const [valueSelected, setValueSelected] = useState(initialCoin);
  const [isOpen, setIsOpen] = useState(false);

  const onChangeHandler = (item) => {
    setValueSelected(item);
    setIsOpen(false);
    if (typeof onChange === 'function') {
      onChange(item);
    }
  };

  return (
    <div className="relative">
      <OutsideClickHandler onOutsideClick={() => isOpen && setIsOpen(false)}>

        <div className="border border-primary cursor-pointer rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='w-[26px] pr-2'>
            <img src={valueSelected.icon} alt={valueSelected.name} className="flex items-center" />
          </div>
          <span className='inline-block mr-2'>{valueSelected.name}</span>
          <BsChevronDown />
        </div>

        <div className={classNames('absolute top-full right-0 left-0 bg-white z-[2] mt-4 rounded-xl shadow-xl border border-primary overflow-hidden', {
          'invisible opacity-0': !isOpen,
          'visible opacity-100': isOpen
        })}>
          <div>
            {data.map(coin =>
              <div className={classNames('py-2 flex items-center cursor-pointer hover:text-white select-none px-4 hover:bg-primary', {
                'bg-primary text-white': coin.name === valueSelected.name
              })} onClick={() => onChangeHandler(coin)}>
                <div className='h-[26px] aspect-square pr-2'>
                  <img src={coin.icon} alt={coin.name} className="flex items-center" />
                </div>
                <span className='inline-block mr-2'>{coin.name}</span>
              </div>
            )}
          </div>
        </div>
      </OutsideClickHandler>

    </div >
  );
}
