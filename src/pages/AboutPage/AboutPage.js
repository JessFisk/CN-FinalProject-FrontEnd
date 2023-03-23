import 'bootstrap/dist/css/bootstrap.min.css';
import "./AboutPage.css";
import BgLogo from "../../components/images/AboutUs.jpeg";
// https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=vrMzS4pY_QjiDtCzpVE3ClKqbU636fb4CKH0nlsduC4=

const AboutPage = (props) => {
    return (
        <div>
            <h1> About Us </h1>
            <image id="img" src={BgLogo}></image>
        </div>
    )
}

export default AboutPage;