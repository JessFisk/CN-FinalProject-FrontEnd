import "./ProfilePage.css";
import React from "react";
import { useState, useEffect } from "react";

const ProfilePage = (props) => {

// const UserProfile = await fetch (login)

// }
// just going to comment the above out to see whether the carousel works^
    return (
        <div id="settings-container">
            <h1> Profile and Settings </h1>
            <span><p>Name:<input></input><button>Change name</button></p></span>
            <span><p>Email:<input></input><button>Change email</button></p></span>
            <span><p>Password:<input></input><button>Change password</button></p></span>
            <button>DELETE ACCOUNT</button>
        </div>
    )
};



export default ProfilePage;