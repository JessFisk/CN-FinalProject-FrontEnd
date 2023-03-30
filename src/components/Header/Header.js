import {
    Badge,
    Container,
    Nav,
    Navbar,
    Dropdown,
    Button,
} from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../images/WhiteNom.png"
import { logout } from "../../utils/index.js"
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    console.log(props)
    const navigate = useNavigate()
    return (
        <Navbar collapseOnSelect expand="lg" id="navbarBackground">
            <Container>
                <Navbar.Brand href="/"><img id="Logo" src={Logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link links" to="/meals">Recipes</Link>
                        <Link className="nav-link links" to="/profile">Profile</Link>
                        <Link className="nav-link links" to="/about">About</Link>
                        <Link className="nav-link links" to="/contact">Contact</Link>
                        <Link className="nav-link links" to="/community">Community</Link>
                    </Nav>
                    <Nav>
                        <Dropdown id="cart">
                            <Dropdown.Toggle variant="success">
                                <FaShoppingCart color="white" fontSize="25px" />
                                <Badge bg="none">{props.basket.length}</Badge>
                            </Dropdown.Toggle>


                            <Dropdown.Menu id="dropdownMenu" style={{ minWidth: 300, maxWidth: 320 }}>
                                {props.basket.map((recipe, index) => {
                                    return (
                                        <Dropdown.Item>
                                            <div key={index} className="checkoutRecipeBoxes">


                                                <div className="basketItemNames">
                                                    <p>{recipe.title}</p>
                                                </div>

                                                <div className="basketItemPrice">
                                                    <p>£{recipe.pricePerServing.toFixed(2 / 10) / 10}0</p>
                                                </div>
                                            </div>
                                        </Dropdown.Item>)
                                })}
                                <Link className="goToCheckoutButtons" to={"/checkout"}>Go to check out</Link>
                            </Dropdown.Menu>
                        </Dropdown>

                        {/* This means the login button will hide when someone is logged in.
                     (only showing the Welcome:username and logout) */}
                        {
                            !props.user && (
                                <Button id="loginBtn" 
                                onClick={
                                    () => {
                                        navigate("/login")
                                    }
                                }>
                                    Login
                                </Button>
                                 
                            )
                        }
                        {/* Creating a true/false boolean- meaning if its true this element will be rendered if its false it will do nothing.
                so this is like an if statement using && */}
                        {
                            props.user && (
                                <>
                                    <Navbar.Text className="welcomeText">
                                        Welcome, {props.user.username}!
                                    </Navbar.Text>
                                    {/* Added Logout button with onClick event that also navigates 

                            back to the landing page on logout need to add use navigate at top too.*/}
                                    <Button
                                        id="logoutBtn"
                                        onClick={
                                            () => {
                                                logout(props.setUser);
                                                navigate("/")
                                            }
                                        }>
                                        Logout
                                    </Button>
                                </>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;
