import { useState } from "react";
import { registerUser } from "../../../utils/user";
import "./Register.css"
import { useNavigate } from "react-router-dom";

const Register = ({ user, setUser }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate()


    const submitHandler = async (e, setUser) => {
        e.preventDefault();
        try {
            const userData = await registerUser(e, username, email, password);

            if (userData.message === "success") {
                setUser(userData.user);
                navigate ("/meals")
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="registerContainer">
            <h1 id="registerHeader">Sign Up</h1>
            <form onSubmit={(e) => submitHandler(e, setUser)}>
                <input
                    id="registerInput"
                    placeholder="username"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <br />
                <input
                    id="registerInput"
                    placeholder="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <input
                    id="registerInput"
                    placeholder="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <button type="submit" id="registerBtn">Register New User</button>
            </form>
            <p id="register">Already got an account with us? <a href="/login">Click here.</a></p>
        </div>
    );
};

export default Register;
