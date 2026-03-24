import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import ProductList from "../pages/productlist/ProductList";
import Product from "../pages/product/Product";
import Review from "../pages/review/Review";
import Cart from "../pages/Cart/Cart";
import DeliveryAddress from "../pages/DeliveryAddress/DeliveryAddress";
import EditAddress from "../pages/EditAddress/EditAddress";

 


const AppRoutes = () => {
  return (
    <Routes>
     

    
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="product/:id/reviews" element={<Review />} />

        <Route path="address" element={<DeliveryAddress />} />
        <Route path="address/edit" element={<EditAddress />} />
        <Route  path='cart' element={<Cart />} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;