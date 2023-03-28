import "./ProfilePage.css";
import React from "react";
import { deleteUser } from "../../utils/user";
import { useNavigate } from "react-router-dom";


const ProfilePage = (props) => {
    const navigate = useNavigate ()
    return (
        // <div style={{backgroundImage: `url("https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        // backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        // backgroundSize: "cover"}}>
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
                    }
                }
            > DELETE ACCOUNT</button >
        </div>
    // </div>
    )
    
};



export default ProfilePage;

