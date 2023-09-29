import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filterProducts } from "../services/products";

export const useProductByName = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  useEffect(() => {
    setInterval(() => {
      filterProducts()
        .then((resp) => resp.json())
        .then((data) =>
          setProduct(data.find((product) => product.name === name))
        )
        .finally(() => setLoading(false));
    }, 2000);
  });
  return { product, loading };
};
