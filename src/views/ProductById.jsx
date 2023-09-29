import { useParams } from "react-router-dom";
import Layout from "../pages/Layout";
import { useEffect, useState } from "react";

const ProductById = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct([]);
    fetch("/apiSimulada.JSON")
      .then((resp) => resp.json())
      .then((data) => setProduct(data));
  }, []);
  const { id } = useParams();
  const productFind = product.find((product) => product.id === id);

  return (
    <Layout>
      {productFind.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img
              src={product.imagen}
              className="card-img-top"
              alt={product.nombre}
            />
            <div className="card-body">
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text">
                <small>{product.detalle}</small>
              </p>
              <p className="card-text fw-bold">${product.precio}</p>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default ProductById;
