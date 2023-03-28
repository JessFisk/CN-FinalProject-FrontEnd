import { useState, useEffect } from "react"
// import { getTokenFromCookie } from "./common";
// import { authCheck } from "./utils/user";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
import LogOut from "./components/registerOrLogContainer/logout/Logout";
import Register from "./components/registerOrLogContainer/register/Register";
import CommunityPage from "./pages/CommunityPage/CommunityPage";



const App = () => {
  const [basket, setBasket] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    //might be better in Homepage?
    if (document.cookie) {
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
    console.log(persistentUser)
    await setUser(persistentUser)

  };

  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col className = "mainRow">
              <Header basket={basket} updateBasket={setBasket} user={user} setUser= {setUser}> </Header>
              <Routes>
                <Route path="/" element={<LandingPage user={user} />}></Route>
                <Route path="/checkout" element={<CheckoutPage basket={basket} updateBasket={setBasket} user={user} setUser= {setUser} />}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/profile" element={<ProfilePage user={user} />}></Route>
                <Route path="/meals" element={<MealsPage user={user} basket={basket} updateBasket={setBasket}/>}></Route>
                <Route path="/login" element={<LoginContainer setUser={setUser}/>}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/logout" element={<LogOut />}></Route>
                <Route path="/community" element={<CommunityPage user={user} />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>

    </>
  );

}
export default App;
