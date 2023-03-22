import { useState } from "react";
import {registerUser} from "../../../utils/user";

const Register = ({user, setUser}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async (e, setUser) =>{
        e.preventDefault();
        try {
            const userData = await registerUser(e, username, password);

            if (userData === "success"){
                setUser(userData.user);
            }
        } catch (error){
            console.log(error)
        }
    };

    return(
        <div className="register-form">
            <form onSubmit={(e) => submitHandler(e, setUser)}>
                <input
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                 <input
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button type="submit">Register New User</button>
            </form>
        </div>
    );
};

export default Register;
