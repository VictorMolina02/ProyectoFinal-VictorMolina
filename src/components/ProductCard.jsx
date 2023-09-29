import { Link } from "react-router-dom";

const ProductCard = ({ title, img, route }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <Link className="btn btn-primary" to={`/product/${route}`}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
