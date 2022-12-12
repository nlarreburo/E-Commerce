import React, { useState } from 'react'

export const ItemCount = ({initial, stock}) => {
  const [count, setCount] = useState(initial)
  
  const increase = () =>{
    setCount(count + 1)
  }

  const decrease = () =>{
      setCount(count - 1)
  }


  return (
    <div className=''>
        <button disabled={ count <=1 } className='px-6 py-3 btn btn-square bg-white' onClick={decrease}> - </button>
        <span className='m-4 px-4'>{count}</span>
        <button disabled={count>=stock} className='px-6 py-3 btn btn-square bg-white' onClick={increase}> + </button>
    </div>
  )
}

export default ItemCount;