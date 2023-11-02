import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./views/Layout";
import ItemListContainer from "./views/ItemListContainer";
import ItemDetailContainer from "./views/ItemDetailContainer";
import NotFound from "./views/NotFound";
import Cart from "./views/Cart";
import ItemListCategoryContainer from "./views/ItemListCategoryContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/categories/Keyboards"
            element={
              <ItemListCategoryContainer category="lRFr0PwSCtHeniE6SXqu" />
            }
          />
          <Route
            exact
            path="/categories/Headsets"
            element={
              <ItemListCategoryContainer category="VapJcM9OIcUM1cG5TAWK" />
            }
          />
          <Route
            exact
            path="/categories/Mouses"
            element={
              <ItemListCategoryContainer category="ugSzq1mgsivvHr1c4IzI" />
            }
          />
          <Route path="/item/:name" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
