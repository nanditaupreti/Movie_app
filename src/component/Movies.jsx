import React from 'react'
import Card from './Card'

function Movies() {
  return (
    <div>
        <div className="text-center text-5xl my-10 font-bold">
          Trending Movies
        </div>
        <div className='flex flex-wrap justify-center text-2xl'>
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
        </div>
    </div>
  )
}

export default Movies