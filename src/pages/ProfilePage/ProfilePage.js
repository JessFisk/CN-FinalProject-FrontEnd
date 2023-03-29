import "./ProfilePage.css";
import React, { useState } from "react";
import { deleteUser, updateUsername } from "../../utils/user";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils";
import { Navigate } from "react-router-dom";


const ProfilePage = (props) => {
    const navigate = useNavigate();
    const [newUsername, setNewUsername] = useState();
    const [oldUsername, setOldUsername] = useState();


    if (!props.user) {
        return <Navigate to="/login" replace />
    }
    
    
    return (
        props.user &&
        <div id="profileContainer">
            <h1 id="profilePage"> Profile and Settings </h1>
            <p>Here you can change your user settings:</p>
            <label id="label">Username: <input type="text" id="inputBox"
                onChange={(e) => {
                    setOldUsername(e.target.value)
                }}
            ></input></label>
            <label id="label">New Username: <input type="text" id="inputBox"
                onChange={(e) => {
                    setNewUsername(e.target.value)
                }}

            ></input></label>
            <label id="label">Password: <input type="password" id="inputBox"></input></label>
            <button id="btn"
                onClick={
                    () => {
                        updateUsername(props.user.token, newUsername, oldUsername);
                        props.setUser({
                            ...props.user,
                            username: newUsername
                        })
                    }
                }>Update</button>

            <button id="deleteBtn"
                onClick={
                    () => {
                        console.log(props);
                        deleteUser(props.user.token, props.user.username);
                        navigate("/");
                        logout(props.setUser);
                    }
                }
            > DELETE ACCOUNT</button >
        </div>
    )

};

export default ProfilePage;

