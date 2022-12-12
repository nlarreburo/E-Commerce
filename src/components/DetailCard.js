import React from 'react'
import ItemCount from './itemCount'

export const DetailCard = ({ id, img, name, stock, detalle, price}) => {
  return (
    <>
        <div className='py-5 flex flex-col md:flex-row justify-around'>
            <div className='md:basis-1/2'>
                <img className='m-auto' src={img}/>
            </div>
            <div className='max-md:m-auto md:mx-5 basis-1/2'>
                <div className='mx-2'>
                    <h2 className='text-3xl font-bold text-start
                    md:text-4xl text-center'>{name}</h2>
                    <p className='my-4'>{detalle}</p>
                    <p className='my-4'>Color:</p>
                    <p className='my-4'>Precio:{price}</p>
                    <p className='my-4'>Stock: {stock}</p>
                    <ItemCount initial={1} stock={stock}/>
                </div>
                <div className='mx-2 my-5 mb:text-center'>
                    <button className='btn btn-primary'>Agregar al carrito</button>
                </div>
            </div>
        </div>
    </>
  )
}