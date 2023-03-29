import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LandingPage.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BannerImg from "./pexels-fauxels-3184191.jpg";
import recipes from "./recipes.json";
import { RecipeCard } from '../../components/recipes/Recipes';
import Card from 'react-bootstrap/Card';

const images = [
    "https://media.istockphoto.com/id/1218575146/photo/ramadan-iftar-food.jpg?s=612x612&w=0&k=20&c=ZLmqhVAM9XyC-oQ22-3qlwOA3c1B7AxKY8p5LJA4C9w=", "https://assets.heartfoundation.org.nz/images/all-shared-sections/blogs/buddha-bowl-salad.jpg?mtime=1669000865",
    "https://media.istockphoto.com/id/1369489882/photo/variety-of-vegan-plant-based-protein-food.jpg?s=612x612&w=0&k=20&c=nKvZEd0raRryOpsGhwB9iOCEIizrDqB3XeFvRLdJOyI=",
    "https://media.istockphoto.com/id/1455050837/photo/super-bowl-or-football-theme-food-table-scene-overhead-view-on-dark-wood.jpg?s=612x612&w=0&k=20&c=dnel7s-AOdR_cJWfc3ItoCHml18DJlTDmKUBR93aJ44=",
    "https://media.istockphoto.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.jpg?s=612x612&w=0&k=20&c=URf-vx_254P5Z88eN4NdGcG-O6HZ9J9GLVmJkcwSwcc=",
    "https://media.istockphoto.com/id/1328853722/photo/over-the-shoulder-view-of-young-asian-woman-doing-home-delivery-grocery-shopping-online-with.jpg?s=612x612&w=0&k=20&c=OXmKDgC3g3nb8mcG1bxP4WLqyjHvdZ9yWfY1gO9jAYA="
]

const LandingPage = (props) => {
    return (
        <Container fluid className="landingPageContainer">
            <Row>
                <Col className="mainRow">
                    <div className="mainBannerImg" style={{ backgroundImage: `url(${BannerImg})` }}>
                        <h1>Delicious Food for Every Mood...</h1>
                    </div>
                </Col>
            </Row>
            <Row className="offerBanner">
                <Col className="mainRow">
                    <div className="exampleMealsSection">
                        <h1>Our Products</h1>
                        <h4>Take a look at whats on offer</h4>
                        <p>Food available to delight your every mood, buy yourself or let us deliver everything you need. </p>
                        <Row xs={1} md={2} lg={3} xl={3} xxl={3} className="g-4">
                            {
                                recipes.recipes.map((recipe, index) => (
                                    <Col key={index}>
                                        <RecipeCard recipe={recipe} user={props.user} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="reviewBanner">
                <Col className="mainRow">
                    <div className="ReviewSection">
                        <h1>What our customers think</h1>
                        <p>Don't just believe us, see what other Chef's have to say about our meals and delivery service... </p>
                        <Row xs={1} md={2} className="g-4">
                           
                                <Col>
                                    <Card>
                                        <Card.Img variant="top"/>
                                        <Card.Body>
                                            <Card.Title className= "reviewHeaders" >Sarah Williams</Card.Title>
                                            <Card.Text>
                                                I love how convenient it is as I hate shopping. Selecting the meals 
                                                and having them delivered with all the ingredients ready really 
                                                helps me fit more in with my busy lifestyle.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top"/>
                                        <Card.Body>
                                            <Card.Title className= "reviewHeaders" >Craig</Card.Title>
                                            <Card.Text>
                                                I subscribe to the recipes as I am terrible at cooking 
                                                and the site allows me to select meals at my skill level so 
                                                I can easily follow the step by step instructions.                                               
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top"/>
                                        <Card.Body>
                                            <Card.Title className= "reviewHeaders" >Mrs kirby</Card.Title>
                                            <Card.Text>
                                                I had my Grandchildren coming to stay for the week and 
                                                wanted some fun recipes to help keep them busy. The 
                                                delivery box allowed me to get everything atonce 
                                                delivered straight to my door and they tasted great.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" />
                                        <Card.Body>
                                            <Card.Title className= "reviewHeaders" >Tom & Layla</Card.Title>
                                            <Card.Text>
                                                We started getting these when we first moved in together 
                                                as neither of us had much cooking experience. we.ve learnt allot 
                                                and can now even alter some of the meals to suit out tastes.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="mainRow">
                    <div className="carousel">
                        <Carousel useKeyboardArrows={true}>
                            {images.map((URL, index) => (
                                <div key={index} className="slide">
                                    <img alt="sample_file" src={URL} key={index} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};



export default LandingPage;
