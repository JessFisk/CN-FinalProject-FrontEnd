import 'bootstrap/dist/css/bootstrap.min.css';
import "./AboutPage.css";
import BgLogo from "../../components/images/AboutUs.jpeg";

const AboutPage = (props) => {
    return (
        <div>
            <h1> About Us </h1>
            <image id="img" src={BgLogo}></image>
        </div>
    )
}

export default AboutPage;