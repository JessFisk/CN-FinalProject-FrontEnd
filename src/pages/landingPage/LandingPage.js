import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterOrLogContainer from '../../components/registerOrLogContainer/RegisterOrLogContainer';
import {useState} from 'react'
import Logo3 from "../../components/images/Logo3.png"

import "../landingPage/LandingPage.css";

const LandingPage = (props) => {
    const [user, setUser] = useState();
    return (
        <div className="LandingPage-Wrapper">
            <h1 id='Title'> NOM... </h1>
            <h3 id='slogan'> Delicous Food for Every Mood</h3>
            <img id="logo" src={Logo3} alt="nom green logo"></img>

            <RegisterOrLogContainer user={user} setUser={setUser}/>
        </div>
    )
}




export default LandingPage;


