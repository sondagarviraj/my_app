/* eslint-disable react/jsx-pascal-case */
import './App.css'
import Home from './my-componet/Home';
import About from './my-componet/About';
import Shop from './my-componet/Shop';
import Shop_category from './my-componet/Shop_category';
import Shop_right from './my-componet/Shop_right';
import Shop3 from './my-componet/Shop3';
import Shop4 from './my-componet/Shop4';
import Shop_details from './my-componet/Shop_details';
import Wishlist from './my-componet/Wishlist';
import Cart from './my-componet/Cart';
import Checkout from './my-componet/Checkout';
import Track_order from './my-componet/Track_order';
import User_pages from './my-componet/User_pages';
import Login from './my-componet/Login';
import My_Account from './my-componet/My_Account';
import Recover_password from './my-componet/Recover_password';
import Contact from './my-componet/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/ShopCat' element={<Shop_category />} />
          <Route path='/Shopright' element={<Shop_right />} />
          <Route path='/Shop3' element={<Shop3 />} />
          <Route path='/Shop4' element={<Shop4 />} />
          <Route path='/Shopdetails' element={<Shop_details />} />
          <Route path='/Wishlist' element={<Wishlist />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Trackorder' element={<Track_order />} />
          <Route path='/Userpage' element={<User_pages />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Account' element={<My_Account />} />
          <Route path='/Password' element={<Recover_password />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


