import React from 'react'
import Logo from '../assets/logo.jpeg';
function navbar() {
  return (
    <div className='flex item-center pl-10 py-4'>
        <img className='md:w-20 w-[50px]' src={Logo} alt="img"/>
        <div className='md:text-3xl text-pink-400 mx-4 font-bold mt-3 text-xl'>
            Movies
        </div>
        <div className='md:text-3xl text-pink-400 mx-4 font-bold mt-3 text-xl'>
            Favourites
        </div>
    </div>
  )
}

export default navbar