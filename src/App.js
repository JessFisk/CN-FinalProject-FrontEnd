import {useState, useEffect} from "react"
// import { getTokenFromCookie } from "./common";
// import { authCheck } from "./utils/user";

import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckoutPage from "./pages/checkoutPage/CheckoutPage"
import LandingPage from "./pages/landingPage/LandingPage"
import ContactPage from "./pages/contactPage/ContactPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MealsPage from "./pages/mealsPage/MealsPage"

import { getTokenFromCookie } from "./common";
import { authCheck } from "./utils/user";



const App = () => {
  const [basket, setBasket] = useState ([])
  const [user, setUser] = useState(null);

  useEffect(() => {
    //might be better in Homepage?
    if (document.cookie){
      let token = getTokenFromCookie("jwt_token")

      if (token === "false") {
        setUser(null);
      } else {
        loginWithToken(token)
      }
      }
    }, [] );

    const loginWithToken = async (token) => {
      const persistentUser = await authCheck(token);
      await setUser(persistentUser.user)
    };  

  return (
    <>
  <BrowserRouter>
    
    <Header basket={basket} updateBasket={setBasket}> </Header>
  <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/checkout" element={<CheckoutPage/>}></Route>
    <Route path="/contact" element={<ContactPage/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/profile" element={<ProfilePage/>}></Route>
    <Route path="/meals" element={<MealsPage/>}></Route>
  </Routes>

</BrowserRouter>

</>
  );

  }
export default App;
