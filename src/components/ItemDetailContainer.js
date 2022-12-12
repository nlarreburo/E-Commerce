import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/prod";
import { DetailCard } from "./DetailCard";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const getProducts = () =>
    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(PRODUCTS.find((p) => p.id === Number(id))),
        10
      );
    });

  useEffect(() => {
    getProducts().then((response) => setItem(response));
  }, [id]);

  return (
    <>
      <div>
        {<DetailCard key={item.id} {...item} />}
      </div>
    </>
  );
};
