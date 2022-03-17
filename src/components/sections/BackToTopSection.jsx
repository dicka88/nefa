import React from 'react';

export default function BackToTopSection() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className='py-10'>
      <div className="container mx-auto text-center py-6">
        <button className='border border-[#DDDDDD] bg-[#FAFAFA] rounded-xl text-gray py-4 px-6' onClick={handleClick}>
          Back to top
        </button>
      </div>
    </section>
  );
}
