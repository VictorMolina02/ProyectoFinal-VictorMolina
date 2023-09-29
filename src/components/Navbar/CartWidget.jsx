import CartIcon from "./CartIcon";

const CartWidget = ({ countNumber }) => {
  return (
    <div className="cart p-2 position-relative">
      <CartIcon />
      <div className="cartNumber position-absolute px-2">{countNumber}</div>
    </div>
  );
};

export default CartWidget;
