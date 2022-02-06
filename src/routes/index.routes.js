import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Products from "../pages/products";
import Shop from "../pages/shop";

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto/:id" element={<Products />} />
            <Route path="/sacola" element={<Shop />} />
        </Routes>
    );
  }

export default Pages;