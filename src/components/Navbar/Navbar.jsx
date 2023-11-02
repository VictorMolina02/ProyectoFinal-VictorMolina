import BrandName from "./BrandName";
import CartWidget from "./CartWidget";
import { NavbarRoutes } from "../../routes/NavbarRoutes";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/cartContext";
const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <BrandName
          img="https://www.zarla.com/images/zarla-futura-1x1-2400x2400-20220325-rykdxc9r6hyf39j6hcbh.png?crop=1:1,smart&width=250&dpr=2"
          name="delSur Ecommerce"
        ></BrandName>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {NavbarRoutes.map((route) => (
              <li className="nav-item" key={route.path}>
                <NavLink to={route.path}>{route.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CartWidget countNumber={cart.items.length} />
    </nav>
  );
};

export default Navbar;
