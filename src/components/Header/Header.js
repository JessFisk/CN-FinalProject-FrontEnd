import {
    Badge,
    Container,
    Nav,
    Navbar,
    Dropdown,
} from "react-bootstrap"
// import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom";

const Header = (props) => {
    return <Navbar id="navbarBackground" variant="dark" style={{ height: 80 }}>
        <Container >
            <Navbar.Brand>
                <img className="logo" src="" alt="logo"/>
                <Link id="pageheader" className="name" to="/">Nom</Link>
            </Navbar.Brand>
            <Nav>
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        {/* <FaShoppingCart color="white" fontSize="25px" /> */}
                        <Badge bg="none">{props.basket.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 370 }}>
                    {props.basket.map((recipe, index)=>{
                        return(
                            <Dropdown.Item>
                            <div key={index} className="checkoutCatBoxes">

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