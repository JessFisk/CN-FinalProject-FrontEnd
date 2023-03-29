import 'bootstrap/dist/css/bootstrap.min.css';
import "./AboutPage.css";
import AboutBackground from "../../components/images/AboutBackground.jpg"
import Logo from "../../components/images/WhiteNomLogo.png";
import RegisterExample from "../../components/images/RegisterExample.png"
import RecipeInstruct from "../../components/images/RecipeInstruct.png"
import Checkout from "../../components/images/Checkout.png"
import Catherine from "../../components/images/Catherine.jpg"
import Adam1 from "../../components/images/Adam1.png"

const AboutPage = (props) => {
    return (
        <div className='aboutContainer'>
            <div className='header'>
                <h1> About Us </h1>
                
            </div>

            <div className='aboutApp' style={{backgroundImage: `url(${AboutBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
                }}>
                <img id='logo' src={Logo} alt="Nom logo"></img>
                <h3>About Nom</h3>
                <p className='aboutText'>Nom is both a recipe information app, and a packaged meal delivery service. <br></br>
                    We provide an extensive list of delicious recipes to suit whatever mood you're in.
                    You can save these recipes to your profile to cook yourself...OR! <br></br>
                    You could purchase them as part of a package and have them delivered to you!
                </p>
            </div>

            <div className='instruct-wrap'>
                <h3> How to use the App</h3>
                <div className='steps-wrapper'>
                <div className='stepOne'>
                    <p className='steps'> Step 1</p>
                    <p className="instructText">
                    Enter your desired username, email address and a password into our Register User area. <br/>
                    Or sign in if you already have an account. <br/>
                    Don't worry, there's no cost to simply registering!
                    </p>
                    <img id='registerImg' src={RegisterExample} alt="representation of register section"></img>
                </div>
                <div className='stepTwo'>
                    <p className='steps'>Step 2</p>
                    <p className="instructText">
                    Browse through our range of delicious meal plans to find the food that suits our mood. <br/>
                    Add them to your Favourites to save them to your profile for later. <br/>
                    Or add them to your basket to order them for delivery.
                    </p>
                    <img id='recipeImg' src={RecipeInstruct} alt="directions on where to find recipes"></img>
                </div>
                <div className='stepThree'>
                    <p className='steps'> Step 3</p>
                    <p className='instructText'>
                    Click the cart in the top right of the Navbar to proceed to the checkout page <br/>
                    Make your purchase at the checkout <br/>
                    Then wait for all your purchased meals to be delivered to you! <br/>
                    EASY!
                    </p>
                    <img id="checkoutImg" src={Checkout} alt="direction to checkout icon"></img>
                </div>
                </div>
            </div>

            <div className='Team-Wrapper'>
                <h3 id='teamHeader'>Meet your Maître d'Apps</h3>
                <div className='TeamProfile-wrap'>
                <div className='cathrine-wrap'>
                    <h4 className='name'>Catherine</h4>
                    <img className='TeamPics' src={Catherine} alt="catherine's face"></img>
                    <p className='teamText'>Catherine worked on: <br/>
                    Setting up the back-end server and connections <br/>
                    Setting up the routes, models and controllers <br/>
                    The contact page <br/>
                    The Homepage carousel <br/>
                    The Navbar with working routes <br/>
                    </p>
                </div>
                <div className='Adam-wrap'>
                    <h4 className='name'>Adam</h4>
                    <img className='TeamPics' src={Adam1} alt="Adam's face"></img>
                    <p className='teamText'>Adam worked on: <br/>
                    Writing the front end login, register and sign-in functions <br/>
                    Adding cookies functions to front end <br/>
                    Design, layout and styling of Homepage<br/>
                    The About page <br/>
                    </p>
                </div>
                <div className='Chris-wrap'>
                    <h4 className='name'>Chris</h4>
                    <p>Image will go here when I've got a pretty one</p>
                    <p className='teamText'>Chris worked on: <br/>
                    Setting up the back-end<br/>
                    Tailoring the error handling for more specific responses<br/>
                    Delete user profile<br/>
                    </p>
                </div>
                <div className='Gaz-wrap'>
                    <h4 className='name'>Gaz</h4>
                    <p>Image will go here when I've got a pretty one</p>
                    <p className='teamText'>Gaz worked on: <br/>
                    Designing the presentation <br/>
                    Giving the presentation?<br/>
                    Maybe other things next week?<br/>
                    </p>
                </div>
                <div className='Jess-wrap'>
                    <h4 className='name'>Jess</h4>
                    <p>Image will go where when I've got a pretty one</p>
                    <p className='teamText'>Jess worked on: <br/>
                    Conceptualisation of the whole app<br/>
                    Finding and implementing the API<br/>
                    Helping to set the page routing up<br/>
                    Connecting frontend to backend database<br/>
                    Troubleshooting and fixing errors<br/>
                    Recipes page<br/>
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;

