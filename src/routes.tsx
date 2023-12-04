import { Route, Routes } from "react-router-dom";

import Home from "@/features/home";
import ProductList from "@/features/product/productList";
import ProductDetail from "@features/product/productDetail";

const Routers = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default Routers;
