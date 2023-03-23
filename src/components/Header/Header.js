import {
    Badge,
    Container,
    Nav,
    Navbar,
    Dropdown,
} from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
    return <Navbar id="navbarBackground" variant="dark" style={{ height: 80 }}>
        <Container className="navBar">
            <Navbar.Brand className="routesContainer">
                <img id="logo" className="links" src="./images/WhiteN.png" alt="logo" to="/"/>
                <Link id="recipes" className="links" to="">Recipes</Link>
                <Link id="profile" className="links" to="">Profile</Link>
                <Link id="about" className="links" to="/about">About</Link>
                <Link id="contact" className="links" to="/contact">Contact</Link>
                <Link id="community" className="links" to="">Community</Link>
            </Navbar.Brand>
            <Nav>
                <Dropdown id="cart">
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge bg="none">{props.basket.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 370 }}>
                    {props.basket.map((recipe, index)=>{
                        return(
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
                            </Dropdown.Item>)})}
                            <Link className="goToCheckoutButtons" to={"/Checkout"}>Go to check out</Link>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
        
    </Navbar>
};

export default Header;
