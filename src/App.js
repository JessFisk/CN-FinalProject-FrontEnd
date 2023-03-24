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
import LoginContainer from "./components/registerOrLogContainer/LoginContainer";
import RegisterOrLogContainer from "./components/registerOrLogContainer/RegisterOrLogContainer";
import LogOut from "./components/registerOrLogContainer/logout/Logout";
import Register from "./components/registerOrLogContainer/register/Register";



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
      console.log(persistentUser)
      await setUser(persistentUser.user)
    
    };  

  return (
    <>
  <BrowserRouter>
    
    <Header basket={basket} updateBasket={setBasket}> </Header>
  <Routes>
    <Route path="/" element={<LandingPage user={user}/>}></Route>
    <Route path="/checkout" element={<CheckoutPage user={user}/>}></Route>
    <Route path="/contact" element={<ContactPage/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/profile" element={<ProfilePage user={user}/>}></Route>
    <Route path="/meals" element={<MealsPage user={user}/>}></Route>
    <Route path="/login" element={<LoginContainer/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/logout" element={<LogOut/>}></Route>

   

  </Routes>

</BrowserRouter>

</>
  );

  }
export default App;
