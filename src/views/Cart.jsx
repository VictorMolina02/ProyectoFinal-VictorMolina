import { useContext } from "react";

import CartCard from "../components/CartCard";
import CartContext from "../context/cartContext";

const Cart = () => {
  const { cart, getTotal, clear } = useContext(CartContext);
  if (cart.items.length === 0) return <h1>El carrito está vacío</h1>;
  return (
    <div className="ordenContainer">
      {cart.items.map(({ item, quantity }) => (
        <div key={item.id}>
          <CartCard
            key={item.id}
            img={item.image}
            title={item.name}
            description={item.description}
            price={item.price}
          />
          <p>Cantidad: {quantity}</p>
        </div>
      ))}
      <p>total:{getTotal()} </p>
      <button className="btn btn-success" onClick={() => clear()}>
        DONE
      </button>
    </div>
  );
};
export default Cart;
