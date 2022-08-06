import React, { useState } from 'react'

function Pagination() {
    const [count,setCount] = useState(1);
    function goPeeche(){
        if(count>1){
            setCount(count-1);
        }
    }
    function goAage(){
           setCount(count+1);
    }
  return (
    <div className="flex w-full justify-center mb-8">
        <button className='p-2  border-gray-600 text-gray-400 rounded-l-xl' onClick={goPeeche}>
         Prev
        </button>
        <button  className='p-2  border-gray-600 text-gray-400  border-l-2 border-r-2 '>
           {count}
        </button>
        <button className='p-2  border-gray-600 text-gray-400 rounded-l-xl' onClick={goAage}>
            Next
        </button>
    </div>
  )
}

export default Pagination