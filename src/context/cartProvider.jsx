import { useState } from "react";
import CartContext from "./cartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({
    buyer: {
      name: "Victor Molina",
      phone: "2964123456789",
      email: "victormolina@dev.com",
    },
    items: [],
    total: 0,
  });

  const addItem = (item, quantity) => {
    const { items } = cart;
    const index = items.findIndex((i) => i.item.id === item.id);

    if (index > -1) {
      items[index].quantity += quantity;
    } else {
      items.push({
        item,
        quantity,
      });
    }

    setCart({
      ...cart,
      items,
      total: items.item.price * quantity,
    });
  };

  const clear = () => {
    setCart((prevValues) => ({
      ...prevValues,
      items: [],
      total: 0,
    }));
  };

  const getTotal = () => {
    const { items } = cart;
    return items.reduce(
      (acc, item) => acc + item.quantity * item.item.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,

        clear,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
