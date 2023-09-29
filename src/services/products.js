const URL = "src/apiSimulada.JSON";

export const getProducts = () => {
  return fetch(URL);
};

// export const getProductsById = async (id) => {
//     //const { id } = useParams();

//     const products = require(URL);

//     const product = products.find((product) => product.id === id);

//     return product;
//   };
