import { CircularProgress } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useProductList } from "../hooks/useProductList";
const ItemListContainer = () => {
  const { product, loading } = useProductList();
  if (loading) {
    return (
      <div className="loadingScreen">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="cardsContainer">
      {product.map((producto) => {
        return (
          <ProductCard
            key={producto.id}
            img={producto.image}
            title={producto.name}
            route={producto.name}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;
