import { useEffect, useState } from "react";
import { filterProducts } from "../services/products";
export const useProductByCategory = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      filterProducts()
        .then((resp) => resp.json())
        .then((data) => setProduct(data))
        .finally(() => setLoading(false));
    }, 2000);
  }, []);
  return { product, loading };
};
