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
    return <Navbar id="navbarBackground" variant="dark" style={{ height: 80 }}>
        <Container className="navBar">
            <Navbar.Brand className="routesContainer">
                <a href="/"><img id="Logo" className="links" src={Logo} alt="logo" /></a>
                <Link id="recipes" className="links" to="/meals">Recipes</Link>
                <Link id="profile" className="links" to="/profile">Profile</Link>
                <Link id="about" className="links" to="/about">About</Link>
                <Link id="contact" className="links" to="/contact">Contact</Link>
                <Link id="community" className="links" to="/community">Community</Link>
            </Navbar.Brand>
            <Nav>
                <Dropdown id="cart">
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge bg="none">{props.basket.length}</Badge>
                    </Dropdown.Toggle>
                    {/* This means the login button will hide when someone is logged in.
                    (only showing the Welcome:username and logout) */}
                    {
                        !props.user && (
                            <Button href="/login">
                                Login
                            </Button>
                        )
                    }

                    <Dropdown.Menu style={{ minWidth: 370 }}>
                        {props.basket.map((recipe, index) => {
                            return (
                                <Dropdown.Item>
                                    <div key={index} className="checkoutRecipeBoxes">

                                        <div className="basketItemNames">
                                            <p>{recipe.name}</p>
                                        </div>

                                        <div className="basketItemPrice">
                                            <p>{recipe.price}</p>
                                        </div>

                                        <button className="basketRemoveButton">
                                            &times;
                                        </button>
                                    </div>
                                </Dropdown.Item>)
                        })}
                        <Link className="goToCheckoutButtons" to={"/Checkout"}>Go to check out</Link>
                    </Dropdown.Menu>
                </Dropdown>

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
        </Container>

    </Navbar>
};

export default Header;
