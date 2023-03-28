import "./ProfilePage.css";
import React from "react";
import { deleteUser } from "../../utils/user";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils";


const ProfilePage = (props) => {
    const navigate = useNavigate ()
    return (
        props.user &&
        <div id="profileContainer">
            <h1 id="profilePage"> Profile and Settings </h1>
            <p>Here you can change your user settings:</p>
                <label id="label">Name: <input type="text" id="inputBox"></input><button id="btn">Change name</button></label>
                <label id="label">Email: <input type="email" id="inputBox"></input><button id="btn">Change email</button></label>
                <label id="label">Password: <input type="password" id="inputBox"></input><button id="btn">Change password</button></label>
                <button id="deleteBtn"
                onClick={
                    () => {
                        console.log(props);
                        deleteUser(props.user.token, props.user.username);
                        navigate("/")
                        logout(props.setUser)
                    }
                }
            > DELETE ACCOUNT</button >
        </div>
    // </div>
    )
    
};



export default ProfilePage;

