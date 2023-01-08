import React, { useEffect, useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark } from '@fortawesome/free-solid-svg-icons'
import PropagateLoader from "react-spinners/PropagateLoader"
import { Link } from 'react-router-dom'





export const ItemCar = () => {
  const [loading, setLoading] = useState(false)
  const {cart , deleteProduct , totalCart, emptyCart} = useCartContext()
  const [product , setProduct] = useState([])

  useEffect(() => {
    cargarP(cart)
  }, [cart])
  
  const deleteP = async (id) => {
    await deleteProduct(id)      
  }


  const increase = (id) =>{
    cart.find( (p) => p.id === id ? p.quantity+= 1: "")
    cargarP(cart)
  }

  const decrease = (id) =>{
    cart.find( (p) => p.id === id ? p.quantity-= 1: "")
    cargarP(cart)
  }
  
  const cargarP = (cart) =>{
    const newP = [...cart]
    setProduct(newP)
  }

  //Carga de pag
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false) //aca cambiar a false
      }, 1);
  }, [])

  return( 
    
    <>
    {
      loading ?
        <div className='flex items-center justify-center m-auto h-[60vh]'>
            <PropagateLoader
                color="#7e2d2d"
                loading={loading}
                size={15}
                aria-label="Propagate Loader"
                data-testid="loader"
            />
        </div>
      :
        <div className='h-[70vh] flex flex-col justify-between '>
          {cart.length>0 && 
            <h2 className='text-4xl text-black text-center p-3'>Tu Carrito</h2>
          }

          { 
            <div className='overflow-scroll'> 
                  {(product.length)>0 ? 
                    (product.map(p=>(
                      <>
                      <div key={p.id} className='flex flex-row justify-around m-5'>
                        <div className='grid grid-cols-2 gap-4 justify-items-center md:grid-cols-4 md:items-center md:w-full'>

                            <div className='w-48'>
                              <img className='' src={p.img}/>    
                            </div>

                            <div>
                              <h2 className='card-title text-2xl'>{p.name}</h2>    
                            </div>

                            <div className='flex flex-row items-center'>
                              <button  disabled={p.quantity===1} className='px-6 py-3 btn btn-square bg-white' onClick={() => decrease(p.id)}> - </button>
                              <span className='mx-4 px-4 text-black font-bold'>{p.quantity}</span>
                              <button disabled={p.quantity>=p.stock} className='px-6 py-3 btn btn-square bg-white' onClick={() => increase(p.id)}> + </button>
                            </div>

                            <div>
                              <p className='card-title text-2xl'>${p.price*p.quantity}</p>    
                            </div>

                        </div>
                        <button onClick={() => deleteP(p.id)}>
                          <FontAwesomeIcon className='text-red-600 btn' icon={faXmark} />  
                        </button>
                      </div>
                      </>
                        )
                      )
                    )        
                    : 
                    <div className='flex  justify-center p-10 h-[70vh]'>
                      <strong className='text-4xl text-black'>Carrito vacio, ingrese su compra!!!</strong>
                    </div>    
                  }
            </div>
          }
            
          {
            cart.length>0 && 
            <div className='text-center'>

              <div className='border border-black w-[60%] m-auto p-4 bg-white'> 
                <strong className='text-4xl text-black'>Total: ${totalCart()}</strong> 
              </div>

              <Link to={'/form'}><button className='btn m-4'>Realizar compra</button></Link> 
              <button className='btn m-4' onClick={emptyCart}>Vaciar carrito</button> 
              
            </div>
          }


        </div>
    }
    </>
    

  )
}

