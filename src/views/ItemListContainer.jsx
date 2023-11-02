import { CircularProgress } from "@mui/material";
import ProductCard from "../components/ProductCard";
import useProductList from "../hooks/useProductList";
const ItemListContainer = () => {
  const { items, isLoading } = useProductList();
  if (isLoading) {
    return (
      <div className="loadingScreen">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="cardsContainer">
      {items.map((producto) => {
        return (
          <ProductCard
            key={producto.id}
            img={producto.image}
            title={producto.name}
            route={producto.id}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;
