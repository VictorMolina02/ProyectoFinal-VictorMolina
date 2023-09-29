import { NavLink } from "react-router-dom";
const BrandName = ({ img, name }) => {
  return (
    <NavLink to={"/"} className="navbar-brand">
      <img className="imgNavbar" src={img} alt="logo" />
      {name}
    </NavLink>
  );
};

export default BrandName;
