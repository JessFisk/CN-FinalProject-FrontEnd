import "./ProfilePage.css";
import React from "react";


const ProfilePage = (props) => {

// const UserProfile = await fetch (login)

// }
// just going to comment the above out to see whether the carousel works^
    return (
        <div id="profileContainer">
            <h1 id="profilePage"> Profile and Settings </h1>
            <span><label id="label">Name:<input id="inputBox" type="text"></input><button id="btn">Change name</button></label></span>
            <span><label id="label">Email:<input id="inputBox" type="email"></input><button id="btn">Change email</button></label></span>
            <span><label id="label">Password:<input id="inputBox" type="password"></input><button id="btn">Change password</button></label></span>
            <button id="deleteBtn">DELETE ACCOUNT</button>
        </div>
    )
};



export default ProfilePage;

