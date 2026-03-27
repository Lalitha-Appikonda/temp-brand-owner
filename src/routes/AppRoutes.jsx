import React from "react";
import Home from "../pages/Home/Home";
import ProductList from "../pages/productlist/ProductList";
import Product from "../pages/product/Product";
import Review from "../pages/review/Review";
import Cart from "../pages/Cart/Cart";
import DeliveryAddress from "../pages/DeliveryAddress/DeliveryAddress";
import EditAddress from "../pages/EditAddress/EditAddress";
import Layout from "../layout/Layout";

import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/global-pages/SignUp";
import UserAccess from "../pages/global-pages/UserAccess";
import SecurityQuestions from "../pages/global-pages/SecurityQuestions";
import ProductCategory from "../pages/global-pages/ProductCategory";
import SetNewPassword from "../pages/global-pages/SetNewPassword";

import StatusHandler from "../pages/global-pages/status screens/StatusHandler";
import Login from "../pages/global-pages/Login";
import ForgotPassword from "../pages/global-pages/ForgotPassword";
import Forgotaftersetup from "../pages/global-pages/Forgotaftersetup";
import Styleguide from "../../src/Styleguide/Styleguide";
import Range from "../components/form elements/Range";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="sign-up" element={<UserAccess />}>
        <Route index element={<SignUp />} />
        <Route path="product-category" element={<ProductCategory />} />
        <Route path="security-questions" element={<SecurityQuestions />} />
      </Route>

      <Route path="login" element={<UserAccess />} >
        <Route index element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="forgot-aftersetup" element={<Forgotaftersetup />} />
        <Route path="setnewpassword" element={<SetNewPassword />} />
      </Route>

      <Route path="/status/:type" element={<StatusHandler />} />

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
