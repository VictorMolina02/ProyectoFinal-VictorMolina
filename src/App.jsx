import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./views/HomeView";
import Layout from "./pages/Layout";
//import ProductById from "./views/ProductById";
import CategoryView from "./views/CategoryView";
import ProductById from "./views/ProductById";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route
            exact
            path="/categories/Teclados"
            element={<CategoryView filter="Teclado" />}
          />
          <Route
            exact
            path="/categories/Auriculares"
            element={<CategoryView filter="Auriculares" />}
          />
          <Route
            exact
            path="/categories/Monitores"
            element={<CategoryView filter="Monitor" />}
          />
          <Route
            exact
            path="/categories/Mouses"
            element={<CategoryView filter="Mouse" />}
          />
          <Route path="/product/:name" element={<ProductById />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
