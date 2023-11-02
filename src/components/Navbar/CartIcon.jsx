import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
const CartIcon = () => {
  return (
    <NavLink to={"/cart"}>
      <ShoppingCartIcon />
    </NavLink>
  );
};

export default CartIcon;
