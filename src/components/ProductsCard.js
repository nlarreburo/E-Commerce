import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./itemCount";

const ProductsCard = (item) => {

  const { addNewProduct } = useCartContext()

  const onAdd = (quantity) => {
      const product = {...item,quantity}
      addNewProduct(product)
  }

  const onClick = () => { 
       
      setTimeout(() => {

      }, 1000);
      
  }

  return (
    <>
      <div className="card w-50 bg-white shadow-xl m-4 border-2 border-solid border-black h-[30rem]">
        <figure>
          <Link to={`/item/${item.id}`}>
            <img src={item.img} alt="Shoes" />          
          </Link>
        </figure>
        <div className="card-body py-4 px-0 m-4">
          <h2 className="card-title">{item.name}</h2>         
          <p>{item.detalle}</p>
          <div className="flex justify-between items-center">
          {item.stock>0 ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} onClick={onClick}/> : <div className="btn-primary p-2 rounded-lg m-auto mt-3">Sin stock</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
