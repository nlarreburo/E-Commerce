import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount";

const ProductsCard = ({ id, name, stock, img, detalle}) => {
  return (
    <>
      <div className="card w-50 bg-base-100 shadow-xl m-4">
        <figure>
          <Link to={`/item/${id}`}>
            <img src={img} alt="Shoes" />          
          </Link>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>         
          <p>{detalle}</p>
          <div className="flex justify-between items-center">
            <div className="card-actions justify-start">
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <ItemCount initial={1} stock={stock}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
