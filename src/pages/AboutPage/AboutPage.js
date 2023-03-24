import 'bootstrap/dist/css/bootstrap.min.css';
import "./AboutPage.css";
import AboutBackground from "../../components/images/AboutBackground.jpg"
import Logo from "../../components/images/WhiteNomLogo.png";

const AboutPage = (props) => {
    return (
        <div>
            <h1> About Us </h1>
            <image id="img" src={AboutBackground} alt="about us image"></image>
        </div>
    )
}

export default AboutPage;