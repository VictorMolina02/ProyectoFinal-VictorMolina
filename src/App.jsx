import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./views/Layout";
import ItemListContainer from "./views/ItemListContainer";
import ItemDetailContainer from "./views/ItemDetailContainer";
import ItemListCategoryContainer from "./views/ItemListCategoryContainer";
import NotFound from "./views/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/categories/Keyboards"
            element={<ItemListCategoryContainer filter="Teclado" />}
          />
          <Route
            exact
            path="/categories/Headsets"
            element={<ItemListCategoryContainer filter="Auriculares" />}
          />
          <Route
            exact
            path="/categories/Monitors"
            element={<ItemListCategoryContainer filter="Monitor" />}
          />
          <Route
            exact
            path="/categories/Mouses"
            element={<ItemListCategoryContainer filter="Mouse" />}
          />
          <Route path="/item/:name" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
