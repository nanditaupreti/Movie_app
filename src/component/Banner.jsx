import React from 'react'
import Logo from '../assets/banner.jpeg'
function Banner() {
  return (
    <div>
        <div className={`bg-[url(${Logo})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end`}>
            <div className="text-xl md:text-3xl text-white p-4 bg-gray-900 w-full flex justify-center bg-opacity-70">
                Avengers 
            </div>
        </div>
    </div>
  )
}

export default Banner