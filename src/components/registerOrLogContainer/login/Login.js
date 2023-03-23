import { useState } from "react";
import { login } from "../../../utils/user";

const Login = ({user, setUser}) => { //other setStates will be needed but don't know what yet
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async (e, setUser) => {// plus other setStates as defined
    e.preventDefault();
    console.log("login button clicked");
    try {
        const userData = await login(e, username, password);

        if (userData.message === "success") {
            setUser(userData.user);
            //other profile info, recipes etc
        }
    } catch (error){
        console.log("error")
    }
};
return (
    <div className="Login-Container">
        <form onSubmit={(e) => submitHandler(e, setUser)} > 
        {/* ^more states might be needed^ */}
            <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form> 
    </div>
    );
};


export default Login

