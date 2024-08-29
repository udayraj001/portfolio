import React, { useEffect, useState } from 'react';
import first from '../../assets/first.png'

const FirstProjectImage = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true);
  }, []);

  return (
    <div className=' justify-center items-center md:w-[500px] md:h-[300px] md:pt-8 sm:w-[250px] pt-10'>
      <div>
        <img src={first} alt='Image' className='shadow-xl shadow-gray-900 rounded '/>
      </div>
    </div>
  );
}

export default FirstProjectImage;
