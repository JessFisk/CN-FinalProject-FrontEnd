import "./Homepage.css"
import {RegisterOrLogContainer} from "../registerOrLogContainer/RegisterOrLogContainer"

const Homepage = () => {
    return(
    <>
        <div className="Header">
            <h1>NOM</h1>
            <img src="./" alt="Logo will go here">Logo</img>
        </div>

        <div className="navbar">
            <p>Navbar will go here</p>
        </div>

        <div className="Sign-inArea">
            <RegisterOrLogContainer
            user = {user}
            setUser = {setUser}
            //other useStates
            //set to left/right maybe?
            />
        </div>

        <div className="MainArea">
            <p>API images/background will go here</p>
            <h3>Delicious food to suit every mood</h3>
        </div>

    </>
    );
}

export default Homepage