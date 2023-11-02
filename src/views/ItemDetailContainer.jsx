import { useContext } from "react";
import { useParams } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import CartContext from "../context/cartContext";
import useProductById from "../hooks/useProductById";
import { CircularProgress } from "@mui/material";
export const ItemDetailContainer = () => {
  const { addItem } = useContext(CartContext);
  const { name } = useParams();
  const { item, isLoading } = useProductById(name);
  console.log(item);
  if (isLoading) {
    return (
      <div className="loadingScreen">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="cardsContainer">
      <InfoCard
        key={item.id}
        img={item.image}
        title={item.name}
        description={item.description}
        price={item.price}
        add={() => addItem(item, 1)}
      />
    </div>
  );
};

export default ItemDetailContainer;
