import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Store from "./Pages/Store";
// import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
// import ProductEnquiry from "./Pages/ProductEnquiry";
// import ProductDetails from "./Pages/ProductDetails";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Profile from "./Pages/User/Profile";
import PrivateRoute from "./Components/Routes/Private";
import AdminRoute from "./Components/Routes/AdminRoute";
import Dashboard from "./Pages/Admin/Dashboard";
import AddProducts from "./Pages/Admin/AddProducts";
import AllProducts from "./Pages/Admin/AllProducts";
import Updatedproducts from "./Pages/Admin/Updatedproducts";
// import ScrollToTop from './Components/ScrollToTop';

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Layout />}>
  //       <Route path='' element={<HomePage />} />
  //       <Route path='blogs' element={<Blogs />} />
  //       <Route path='product-enquiry' element={<ProductEnquiry />} />
  //       <Route path='store/product-details' element={<ProductDetails />} />
  //       <Route path='product-details' element={<ProductDetails />} />
  //     </Route>
  //   )
  // );

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about-esternghat" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        {/* User Routes */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* Admin Routes */}
        <Route path="/" element={<AdminRoute />}>
          <Route path="admin" element={<Dashboard />} />
          <Route path="admin/product" element={<AllProducts />} />
          <Route path="admin/create-product" element={<AddProducts />} />
          <Route path="/admin/product/:slug" element={<Updatedproducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
