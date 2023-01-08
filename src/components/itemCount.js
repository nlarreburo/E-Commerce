import React, { useState } from 'react'
import {Count} from './Count';

export const ItemCount = ({onAdd, onClick ,stock}) => {

  const [counta, setCount] = useState(1)

  const contador = (c) =>{
      setCount(c)
  }

  return (

    <div className='md:flex flex-row items-center'>
      <Count initial={1} contador={contador} stock={stock}/>
      <div className='mx-2 my-5 mb:text-center'>
          <button className='btn btn-primary' onClick={() => (onClick(), onAdd(counta))}>Agregar al carrito</button>
      </div>
    </div>

  )
}

export default ItemCount;