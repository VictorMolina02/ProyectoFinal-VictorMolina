import { useEffect, useState } from "react";
import { getProductsById } from "../services/products";

export const useProductById = (productId) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsById(productId)
      .then((data) => data.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return {
    product,
  };
};
