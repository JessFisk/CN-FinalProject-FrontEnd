import { useState } from "react";
import { login } from "../../../utils/user";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";

const Login = ({user, setUser}) => { //other setStates will be needed but don't know what yet
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const submitHandler = async (e, setUser) => {// plus other setStates as defined
    e.preventDefault();
    console.log("login button clicked");
    try {
        const userData = await login(e, username, password);

        if (userData.message === "success") {
            setUser(userData.user);
            navigate("/meals")
            //other profile info, recipes etc
        }
    } catch (error){
        console.log("error")
    }
};
return (
    <div className="loginContainer">
        <h1 id="loginHeader">Login</h1>
        <form onSubmit={(e) => submitHandler(e, setUser)} id="loginForm"> 
        {/* ^more states might be needed^ */}
            <input
            id="loginInput"
            placeholder="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <br/>
            <input
            id="loginInput"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <br/>
            <button type="submit" id="loginButton">Login</button>
        </form> 
        <p id="login">Not yet registered with us? <Link to="/register">Click here.</Link></p>
    </div>
    );
};


export default Login

