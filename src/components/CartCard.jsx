import { useState } from "react";

export default function CartCard({ img, title, price, description, stock }) {
  const [amount, setAmount] = useState(1);
  const removeAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const addAmount = () => {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  };
  return (
    <div id="carrito" className="card mb-3 cardCarrito">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid " alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text precio fw-bold">${price * amount}</p>
            <div className="cantidadContainer">
              <button className="btn btn-light" onClick={removeAmount}>
                -
              </button>
              <p className="cantidadContainers fw-bold">{amount}</p>
              <button className="btn btn-light" onClick={addAmount}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
