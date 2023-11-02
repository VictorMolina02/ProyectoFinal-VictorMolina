import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import useProductList from "../hooks/useProductList";
import { CircularProgress } from "@mui/material";
const ItemListCategory = ({ category }) => {
  const { isLoading } = useProductList();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", category);
    getDoc(itemRef)
      .then((snapshot) => {
        setItems([
          {
            id: snapshot.id,
            ...snapshot.data(),
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  });
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

export default ItemListCategory;
