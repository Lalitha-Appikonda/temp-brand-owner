import React from 'react'
import Home from '../pages/Home/Home'
import ProductList from '../pages/productlist/ProductList'
import Product from '../pages/product/Product'
import Review from '../pages/review/Review'
import Cart from '../pages/Cart/Cart'
import DeliveryAddress from '../pages/DeliveryAddress/DeliveryAddress'
import EditAddress from '../pages/EditAddress/EditAddress'
import Layout from '../layout/Layout'


import { Routes, Route } from "react-router-dom";
import SignUp from '../pages/global-pages/SignUp'
import UserAccess from '../pages/global-pages/UserAccess'
import SecurityQuestions from '../pages/global-pages/SecurityQuestions'
import ProductCategory from '../pages/global-pages/ProductCategory'
import ApprovalWait from '../pages/global-pages/ApprovalWait'
import AccountApproved from '../pages/global-pages/AccountApproved'
import RejectedApproval from '../pages/global-pages/RejectedApproval'
import Styleguide from '../Styleguide/Styleguide'
import LimitExceed from '../pages/global-pages/LimitExceed'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<UserAccess />}>
        <Route index element={<SignUp />}/>
        <Route path='security-questions' element={<SecurityQuestions />}/>
        <Route path='product-category' element= {<ProductCategory />} />
      </Route>
      <Route path='waiting-approval' element={<ApprovalWait />} />
      <Route path='account-approved' element= {<AccountApproved />}/>
      <Route path='account-rejected' element= {<RejectedApproval />}/>
      <Route path='limit-exceed' element= {<LimitExceed />}/>


      {/* <Route path="/" element={<Laywout/>}>

        <Route index element={<Home/>} />

        <Route path="products" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="product/:id/reviews" element={<Review />} />

        <Route path="cart" element={<Cart />} />
        <Route path="address" element={<DeliveryAddress />} />
        <Route path="address/edit" element={<EditAddress />} />

      </Route> */}
    </Routes>
  )
}

export default AppRoutes