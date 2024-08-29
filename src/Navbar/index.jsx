import React from 'react'
import Left from './Left'
import Right from './Right'

const Navbar = () => {
  return (
    <div className='w-full flex bg-background  justify-center pt-2 '>
      <div className='w-full max-w-[1280px] flex justify-between'>
        <Left/>
        <Right/>
      </div>
    </div>
  )
}

export default Navbar
