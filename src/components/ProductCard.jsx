import { Link } from "react-router-dom";

const ProductCard = ({ title, img, route }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link className="btn btn-primary" to={`/item/${route}`}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
