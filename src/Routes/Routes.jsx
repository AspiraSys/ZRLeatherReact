import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Additional/Layout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Filter from "../Pages/Categories/Footwear";
import Wallets from "../Pages/Categories/Wallets";
import Belts from "../Pages/Categories/Belts";
import Bags from "../Pages/Categories/Bags";
import ProductDescription from "../Components/Additional/ProductDescription";
import ShippingDetails from "../Components/Additional/ShippingDetails";
import ShippingDetails2 from "../Components/Additional/ShippingDetails2";
import Cart from "../Components/Additional/Cart";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/categories/footwear" element={<Filter />} />
          <Route path="/categories/bags" element={<Bags />} />
          <Route path="/categories/belts" element={<Belts />} />
          <Route path="/categories/wallets" element={<Wallets />} />
          <Route path="/categories/others" element={<Filter />} />
          <Route path="/ProductDescription" element={<ProductDescription />} />
          <Route path="/ShippingDetails" element={<ShippingDetails />} />
          <Route path="/ShippingDetails2" element={<ShippingDetails2 />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
