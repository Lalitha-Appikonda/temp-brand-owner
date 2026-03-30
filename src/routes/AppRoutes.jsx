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
import SignUp from "../pages/global-pages/signup Total/SignUp";
import UserAccess from "../pages/global-pages/UserAccess";
import SecurityQuestions from "../pages/global-pages/signup Total/SecurityQuestions";
import ProductCategory from "../pages/global-pages/signup Total/ProductCategory";
import SetNewPassword from "../pages/global-pages/login Total/SetNewPassword";

import StatusHandler from "../pages/global-pages/status screens/StatusHandler";
import Login from "../pages/global-pages/login Total/Login";
import ForgotPassword from "../pages/global-pages/login Total/ForgotPassword";
import Forgotaftersetup from "../pages/global-pages/login Total/Forgotaftersetup";
import Register from "../pages/global-pages/signup Total/Register";
import SigningIn from "../pages/global-pages/login Total/SigningIn";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="sign-up" element={<UserAccess />}>
        <Route index element={<Register/>} />
        <Route path="sign-up/security-questions" element={<SecurityQuestions />} />
        
      </Route>
      <Route path="/forgot-after-setup" element={<Forgotaftersetup />} />
      <Route path="/reset-password" element={<SetNewPassword />} />
      <Route path="login" element={<UserAccess />} >
        <Route index element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
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
