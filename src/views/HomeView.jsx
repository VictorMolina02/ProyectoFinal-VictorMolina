//import ProductCard from "../components/ProductCard";
//import CartCard from "../components/CartCard";
import ProductCard from "../components/ProductCard";
import { useProductList } from "../hooks/useProductList";

const HomeView = () => {
  const product = useProductList();
  return (
    <div className="cardsContainer">
      {product.map((producto) => {
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

export default HomeView;
