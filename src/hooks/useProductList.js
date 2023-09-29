import { useEffect, useState } from "react";

export const useProductList = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("src/apiSimulada.JSON")
      .then((resp) => resp.json())
      .then((data) => setProduct(data));
  }, []);
  return product;
};
