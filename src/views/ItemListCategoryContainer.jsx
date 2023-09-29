import { CircularProgress } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useProductByCategory } from "../hooks/useProductByCategory";
const ItemListCategoryContainer = ({ filter }) => {
  const { product, loading } = useProductByCategory();
  const productFilter = product.filter((product) =>
    product.category.includes(filter)
  );
  if (loading) {
    return (
      <div className="loadingScreen">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="cardsContainer">
      {productFilter.map((producto) => {
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
export default ItemListCategoryContainer;
