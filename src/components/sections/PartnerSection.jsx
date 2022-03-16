import React from 'react';

import partner1 from '../../images/partners/partner1.png';
import partner2 from '../../images/partners/partner2.png';
import partner3 from '../../images/partners/partner3.png';
import partner4 from '../../images/partners/partner4.png';

export default function PartnerSection() {
  return (
    <div className="px-6">
      <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Trusted Partners Worldwide</h2>
            <p className='text-gray'>We're partners with countless major organisations around the globe</p>
          </div>
          <div className="">
            <div className="flex justify-center gap-6">
              <img src={partner1} alt="" />
              <img src={partner2} alt="" />
              <img src={partner3} alt="" />
              <img src={partner4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
