import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import ProductList from "../pages/productlist/ProductList";
import Product from "../pages/product/Product";
import Review from "../pages/review/Review";
import Cart from "../pages/Cart/Cart";
import DeliveryAddress from "../pages/DeliveryAddress/DeliveryAddress";
import EditAddress from "../pages/EditAddress/EditAddress";

import UserAccess from "../pages/global-pages/UserAccess";
import ProductCategory from "../pages/global-pages/ProductCategory";
import SignUp from "../pages/global-pages/SignUp";
import SecurityQuestions from "../pages/global-pages/SecurityQuestions";


const AppRoutes = () => {
  return (
    <Routes>

      
      <Route path="/access" element={<UserAccess />}>

        <Route index element={<SignUp />} />
        <Route path="category" element={<ProductCategory />} />
        <Route path="security-questions" element={<SecurityQuestions />} />
        

      </Route>

    
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="product/:id/reviews" element={<Review />} />

        <Route path="cart" element={<Cart />} />
        <Route path="address" element={<DeliveryAddress />} />
        <Route path="address/edit" element={<EditAddress />} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;