import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { deleteUser } from "../../utils/user";


const ProfilePage = (props) => {
    const navigate = useNavigate()

    // const UserProfile = await fetch (login)

    // }
    // just going to comment the above out to see whether the carousel works^
    return (
        <div id="profileContainer">
            <h1 id="profilePage"> Profile and Settings </h1>
            <p>Here you can change your user settings:</p>
            <label id="label">Name:<input type="text" id="inputBox"></input><button id="btn">Change name</button></label>
            <label id="label">Email:<input type="email" id="inputBox"></input><button id="btn">Change email</button></label>
            <label id="label">Password:<input type="password" id="inputBox"></input><button id="btn">Change password</button></label>
            <button id="deleteBtn"
                onClick={
                    () => { deleteUser(props.user.jwt_token, props.user.username);
                    navigate("/")}}
                > DELETE ACCOUNT</button >
        </div >
    )
};



export default ProfilePage;

