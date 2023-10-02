import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <div className="errorContainer">
        <p>404</p>
        <h1>PAGE NOT FOUND</h1>
      </div>
      <div className="home">
        <NavLink to="/" className="btn btn-primary">
          Go back home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
