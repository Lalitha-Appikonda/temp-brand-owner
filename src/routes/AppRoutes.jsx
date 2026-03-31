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
import UserAccess from "../pages/global-pages/UserAccess";

import StatusHandler from "../pages/global-pages/status screens/StatusHandler";

import Register from "../pages/global-pages/signup Total/Register";
import SigningIn from "../pages/global-pages/login Total/SigningIn";
import Login from "../pages/global-pages/login Total/Login";
import Payment from "../pages/payment/Payment";
import CardSample from "../pages/Home/CardSample";
import ProductInnerPage from "../pages/Home/ProductInnerPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="sign-up" element={<UserAccess />}>
        <Route index element={<Register />} />
      </Route>

      <Route path="login" element={<UserAccess />}>
        <Route index element={<Login />} />
        <Route path="forgotpassword" element={<SigningIn />} />
      </Route>

      <Route path="/status/:type" element={<StatusHandler />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="productinnerpage" element={<ProductInnerPage/>}/>
        <Route path="products" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="product/:id/reviews" element={<Review />} />
        <Route path="address/edit" element={<EditAddress />} />

        <Route path="cart" element={<Payment />} />
        <Route path="address" element={<Payment />} />
        <Route  path='samplecards' element={<CardSample/>} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;
