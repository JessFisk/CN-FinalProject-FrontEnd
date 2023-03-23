import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterOrLogContainer from '../../components/registerOrLogContainer/RegisterOrLogContainer';
import {useState} from 'react'
import Logo from "../../components/images/WhiteNom.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LandingPage.css";
const images = [
"https://media.istockphoto.com/id/1218575146/photo/ramadan-iftar-food.jpg?s=612x612&w=0&k=20&c=ZLmqhVAM9XyC-oQ22-3qlwOA3c1B7AxKY8p5LJA4C9w=","https://assets.heartfoundation.org.nz/images/all-shared-sections/blogs/buddha-bowl-salad.jpg?mtime=1669000865",
 "https://media.istockphoto.com/id/1369489882/photo/variety-of-vegan-plant-based-protein-food.jpg?s=612x612&w=0&k=20&c=nKvZEd0raRryOpsGhwB9iOCEIizrDqB3XeFvRLdJOyI=",
 "https://media.istockphoto.com/id/1455050837/photo/super-bowl-or-football-theme-food-table-scene-overhead-view-on-dark-wood.jpg?s=612x612&w=0&k=20&c=dnel7s-AOdR_cJWfc3ItoCHml18DJlTDmKUBR93aJ44=",
 "https://media.istockphoto.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.jpg?s=612x612&w=0&k=20&c=URf-vx_254P5Z88eN4NdGcG-O6HZ9J9GLVmJkcwSwcc=",
 "https://media.istockphoto.com/id/1328853722/photo/over-the-shoulder-view-of-young-asian-woman-doing-home-delivery-grocery-shopping-online-with.jpg?s=612x612&w=0&k=20&c=OXmKDgC3g3nb8mcG1bxP4WLqyjHvdZ9yWfY1gO9jAYA="
]

const LandingPage = (props) => {
    const [user, setUser] = useState();
    return (
        <div className="LandingPage-Wrapper">
            <div className='logowrap'>
              <img id="logo" src={Logo} alt="nom green logo"></img>
            <h3 id='slogan'> Delicous Food for Every Mood</h3>
            {/* <h1 id='Title'> NOM... </h1> */}
            <RegisterOrLogContainer user={user} setUser={setUser}/>
            </div>
            <div className="carousel">
            <Carousel useKeyboardArrows={true}>
            {images.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index} />                      
                </div>
                ))}
                </Carousel>
            </div>
            </div>
    )
};

            

export default LandingPage;