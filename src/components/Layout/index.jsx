import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='overflow-hidden'>
        {children}
      </main>
      <Footer />
    </>
  );
}
