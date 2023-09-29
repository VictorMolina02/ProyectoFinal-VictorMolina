import { useState } from "react";
import { useProductByName } from "../hooks/useProductByName";
import { CircularProgress } from "@mui/material";

const ItemDetailContainer = () => {
  const { product, loading } = useProductByName();
  const [add, setAdd] = useState("ADD");
  if (loading) {
    return (
      <div className="loadingScreen">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="cardsDetailContainer">
      <div className="card" key={product.id}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            <small>{product.description}</small>
          </p>
          <p className="card-text fw-bold">${product.price}</p>
          <button className="btn btn-success" onClick={() => setAdd("ADDED")}>
            {add}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
