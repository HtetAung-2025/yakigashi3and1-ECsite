import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Ingredients from "./pages/Ingredients.jsx";
import Product from "./pages/Products.jsx";
import Payment from "./pages/Payment.jsx";
import QandA from "./pages/QandA.jsx";
import Cart from "./pages/Cart.jsx";
import Delivery from "./pages/Delivery.jsx";
import Lemoncake from "./pages/Lemoncake.jsx";
import {CartProvider} from './pages/CartContext.jsx';
import Whitechoco from "./pages/Whitechoco.jsx";
import Lemongalet from "./pages/Lemongalet.jsx";
import Nutcake from "./pages/Nutcake.jsx";
import Cookies from "./pages/Cookies.jsx";
import Florentin from "./pages/Florentin.jsx";
import Vanila from "./pages/Vanila.jsx";
import Ichogo from "./pages/Ichigo.jsx";
import Giftbox from "./pages/Gift.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
function App() {
  return (
<CartProvider>
 <BrowserRouter>
 <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ingredients" element={<Ingredients/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/qanda" element={<QandA/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
        <Route path="/lemoncake" element={<Lemoncake/>}/>
         <Route path="/whitechoco" element={<Whitechoco/>}/>
         <Route path="/lemongalet" element={<Lemongalet/>}/>
         <Route path="/nutcake" element={<Nutcake/>}/>
         <Route path="/cookies" element={<Cookies/>}/>
         <Route path="/florentin" element={<Florentin/>}/>
         <Route path="/vanila" element={<Vanila/>}/>
         <Route path="/ichigo" element={<Ichogo/>}/>
         <Route path="/giftbox" element={<Giftbox/>}/>
      </Routes>
      <ToastContainer 
          position="bottom-right" 
          autoClose={2000} 
          theme="light"
        />
    </BrowserRouter>
</CartProvider>
    )
}

export default App
