import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useCartContext } from '../../context/CartContext';

export const FormR = () => {
  
  const {register, handleSubmit} = useForm()
  const {cart , totalCart, emptyCart } = useCartContext()
  const [compra, setCompra] = useState(false)
  const [id, setId] = useState([])


  //Enviar orden a FS
  const saveOrder = async (order) =>{
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    const {id} = await addDoc(orderCollection, order)
    if (id){
      setCompra(true)
      setId(id)
      emptyCart()
    }
  }

  //Orden de compra
  const makeOrder = (user) =>{
    const order= {
      buyer: user,
      items: cart,
      total: totalCart()
    }
    console.log('Orden levantada:', order)
    saveOrder(order)
  }

  //Compra realizada

  return (
    compra? 
      <div className='flex  justify-center p-10 h-[70vh]'>
        <strong className='text-4xl text-black'>Su compra fue realizada, el codigo de su orden es: {id}</strong>
      </div>
    
    :

      <div className='h-[65vh]'>
            <h2 className='text-3xl text-center p-5'>Por favor ingresar los datos para realizar el pedido</h2>
                <form className='flex flex-col w-[60%] m-auto h-full' onSubmit={handleSubmit(makeOrder)}>

                    <div className='grid grid-cols-4 my-2'>
                        <label className='text-xl text-black font-bold'>Nombre:</label>
                        
                        <input type="text" className='col-span-3' {...register('nombre',
                          {
                            required:true,
                          } 
                          )}/>
                    </div>

                    <div className='grid grid-cols-4 my-2'>
                        <label className='text-xl text-black font-bold'>Telefono:</label>

                        <input type="number" className='col-span-3' {...register('phone')}/>

                    </div>

                    <div className='grid grid-cols-4 my-2'>
                        <label className='text-xl text-black font-bold'>Email:</label>

                        <input type="text" className='col-span-3' {...register('email',
                          {
                            pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                          }
                      )}/>

                    </div>
                    <div className='m-auto text-center w-[60%] p-[15px]'>
                      <input className='btn btn-primary m-auto' type="submit" value="Realizar orden de compra"></input>
                    </div>
                </form>
            </div>
  )
}

