import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterOrLogContainer from '../../components/registerOrLogContainer/RegisterOrLogContainer';
import {useState} from 'react'
import Logo3 from "../../components/images/Logo3.png"

import "./LandingPage.css";

const LandingPage = (props) => {
    const [user, setUser] = useState();
    return (
        <div className="LandingPage-Wrapper">
            <div className='logowrap'>
              <img id="logo3" src={Logo3} alt="nom green logo"></img>
            </div>
            
            <h1 id='Title'> NOM... </h1>
            <h3 id='slogan'> Delicous Food for Every Mood</h3>
            

            <RegisterOrLogContainer user={user} setUser={setUser}/>
        </div>
    )
}




export default LandingPage;


