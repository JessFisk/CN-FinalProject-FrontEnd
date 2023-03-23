
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckoutPage from "./pages/checkoutPage/CheckoutPage"
import LandingPage from "./pages/landingPage/LandingPage"
import ContactPage from "./pages/contactPage/ContactPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import { useState } from "react";




const App = () => {
  const [basket, setBasket] = useState ([])

  return (
    <BrowserRouter>
    
    <Header basket={basket} updateBasket={setBasket}> </Header>
  <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/checkout" element={<CheckoutPage/>}></Route>
    <Route path="/contact" element={<ContactPage/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
  </Routes>

</BrowserRouter>
  );
}

export default App;
