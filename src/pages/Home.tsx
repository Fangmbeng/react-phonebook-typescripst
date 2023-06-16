import React from 'react';
import Background from '../assets/images/image.webp';

function Home() {
  return (
    <div style={{ backgroundImage: `url(${Background})` }} className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
      <div className='flex place-item-center h-screen'>
        home

      </div>
    </div>
  )
}

export default Home
