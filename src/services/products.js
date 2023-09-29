const URL = "src/apiSimulada.JSON";
const URL_FILTER = "../src/apiSimulada.JSON";
export const getProducts = () => {
  return fetch(URL);
};

export const filterProducts = () => {
  return fetch(URL_FILTER);
};
