import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import ItemCount from './itemCount'


export const DetailCard = (item) => {
    const [clickT, setClickT] = useState(false)
    const { addNewProduct } = useCartContext()

    const onAdd = (quantity) => {
        
        const product = {...item,quantity}
        addNewProduct(product)
    }

    const onClick = () => { 
        setClickT(true)            
        setTimeout(() => {
            setClickT(false)
        }, 10000);
        
    }


  return (
    <>
        <div className='m-auto min-h-[65vh] p-5 flex flex-col justify-around items-center md:flex-row'>
            <div className='md:basis-1/2'>
                <img className='m-auto' src={item.img}/>
            </div>
            <div className='max-md:m-auto md:mx-5 basis-1/2'>
                <div className='mx-2'>
                    <h2 className='text-3xl font-bold text-start
                    md:text-4xl text-center'>{item.name}</h2>
                    <p className='my-4'>{item.detalle}</p>
                    <p className='my-4'>Color:</p>
                    <p className='my-4'>Precio:{item.price}</p>
                    <p className='my-4'>Stock: {item.stock}</p>
                    {item.stock>0 ?
                            clickT ? 
                            <div className='text-center my-10 flex flex-col'>
                                <strong className='border p-4 bg-white text-black rounded-full'> Artigulo agregado al carrito!!! </strong>
                                <Link className='btn m-10' to={'/carrito'}>Desea ir al carrito? Click aca</Link>
                            </div>     
                            : 
                            <ItemCount initial={1} stock={item.stock} onAdd={onAdd} onClick={onClick}/>

                        :
                        <span className="btn-primary p-2 rounded-lg mt-3">Sin stock</span>
                    }
                    
                </div>

            </div>
        </div>
    </>
  )
}