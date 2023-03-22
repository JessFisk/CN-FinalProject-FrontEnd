import {useState, useEffect} from "react"
import { getTokenFromCookie } from "./common";
import { authCheck } from "./utils/user";

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckoutPage from "./pages/checkoutPage/CheckoutPage"
import LandingPage from "./pages/landingPage/LandingPage"
import ContactPage from "./pages/contactPage/ContactPage"

const App = () => {
    const [user, setUser] = useState(null);
    //***other states will need to be set here***

    console.log("hello world");

    useEffect(() => {
      if (document.cookie){
        let token = getTokenFromCookie("jwt_token")

        if (token === "false") {
          setUser(null);
        } else {
          loginWithToken(token)
        }
      }
    }, []);

    const loginWithToken = async (token) => {
      const persistentUser = await authCheck(token);
      await setUser(persistentUser.user)
  return (
    <>
  <BrowserRouter>
    
  
  <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/checkout" element={<CheckoutPage/>}></Route>
    <Route path="/contact" element={<ContactPage/>}></Route>
  </Routes>

</BrowserRouter>

</>
  );
}
  }

export default App;