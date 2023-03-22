
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckoutPage from "./pages/checkoutPage/CheckoutPage"
import LandingPage from "./pages/landingPage/LandingPage"
import ContactPage from "./pages/contactPage/ContactPage"
// import {useState, useEffect} from "react";



const App = () => {
  return (
    <BrowserRouter>
    
  
  <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/checkout" element={<CheckoutPage/>}></Route>
    <Route path="/contact" element={<ContactPage/>}></Route>
  </Routes>

</BrowserRouter>
  );
}

export default App;
