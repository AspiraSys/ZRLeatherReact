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
          {/* <Route path="/product/:id" element={<ProductDescription />} /> */}
          <Route path='/ProductDescription' element={<ProductDescription/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
