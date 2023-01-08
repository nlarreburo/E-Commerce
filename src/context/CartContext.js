import React, { createContext, useContext, useState } from 'react'


export const Contexto = createContext()


export const useCartContext = () => {
    const cartContext = useContext(Contexto)
    return cartContext
}

export const CartContext = ({children}) => {
    const [cart, setCart] = useState([])
  
    //Agregar producto
    const addNewProduct = (product) =>{
      const oldProduct = cart.find((p) => p.id === product.id)
      if (!oldProduct){
        const newCart = [...cart,product]
        setCart(newCart) 
      } else {
        cart.find((p) => p.id === product.id ? (p.quantity=p.quantity + product.quantity):"")
      }
    }

    //Eliminar producto
    const deleteProduct = (id) => {
      const newCart = cart.filter( p => (p.id !== id))
      setCart(newCart)
    }

    //Monto total
    const totalCart = () =>{
      let a = 0
      cart.forEach(p => a += (p.price*p.quantity))
      return a
    }

    //Vaciar carrito
    const emptyCart = () =>{
      setCart([])
    }
    

    
  return (
    <>
      <Contexto.Provider value={{cart, addNewProduct, deleteProduct, totalCart,emptyCart}}>
        { children }
      </Contexto.Provider>
    </>
  )
}


