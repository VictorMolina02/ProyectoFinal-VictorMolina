import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
//import { useProductList } from "../hooks/useProductList";
const CategoryView = ({ filter }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("../src/apiSimulada.JSON")
      .then((resp) => resp.json())
      .then((data) => setProduct(data));
  }, []);
  const productFilter = product.filter((product) =>
    product.tipo.includes(filter)
  );
  return (
    <div className="cardsContainer">
      {productFilter.map((producto) => {
        return (
          <ProductCard
            key={producto.id}
            img={producto.imagen}
            title={producto.nombre}
            route={producto.nombre}
          />
        );
      })}
    </div>
  );
};
export default CategoryView;
