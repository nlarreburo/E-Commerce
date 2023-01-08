import React, { useState } from 'react'


export const Count = ({initial, stock, contador, id}) => {

    const [count, setCount] = useState(initial)


    const increase = () =>{
        setCount(count + 1)

    }
  
    const decrease = () =>{
        setCount(count - 1)

    }
  return (
    <div className='flex flex-row items-center'>
        <button disabled={ count <=1 } className='px-6 py-3 btn btn-square bg-white' onClick={decrease} onChange={id}> - </button>
        <span className='mx-4 px-4 text-black font-bold' onChange={contador(count)}>{count}</span>
        <button disabled={count>=stock} className='px-6 py-3 btn btn-square bg-white' onClick={increase} onChange={id}> + </button>
    </div>
  )
}

