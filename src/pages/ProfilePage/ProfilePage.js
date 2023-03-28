import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { deleteUser } from "../../utils/user";
import { updateUser } from "../../utils/user";


const ProfilePage = (props) => {
    const navigate = useNavigate()

    const UpdateUser = ({user, setUser}) => {
        const [username, setUsername] = useState();
        const [email, setEmail] = useState();
        const [password, setPassword] =useState();
    
        const updateHandler = async (e, setUser) => {
            e.preventDefault();
            console.log("11111111111");
    
            try {
                const userData = await updateUser(e, username, email, password);
    
                if (userData === "success"){
                    setUser(userData.user)
                    console.log("2222222")
                }
            } catch (error) {
                console.log(error)
            }
        }; //end of try block
    
        return (    
            <div id = "profileContainer">
                <h1 id="profilePage"> Profile and Settings </h1>
    //         <p>Here you can change your user settings:</p>
            <form onSubmit={(e) => updateHandler(e, setUser)} > 
                <input
                id="inputBox"
                placeholder="username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <br/>
                <button type="submit" id="updateUsernameButton">Update Username</button>
                <input
                id="inputBox"
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <br/>
                <button type="submit" id="updatePassButton">Update Password</button>
                <input
                id="inputBox"
                placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <br/>
                <button type="submit" id="updateEmailButton">Update Email</button> 
               
            </form> 
            <button id="deleteBtn"
            onClick={
            () => { deleteUser(props.user.jwt_token, props.user.username);
            navigate("/")}}
            > 
            DELETE ACCOUNT
            </button > 
        </div>
        )
};
}



export default ProfilePage;

    //UpdateUser here

    // const UserProfile = await fetch (login)

    // }
    // just going to comment the above out to see whether the carousel works^
    // return (
    //     <div id="profileContainer">
    //         <h1 id="profilePage"> Profile and Settings </h1>
    //         <p>Here you can change your user settings:</p>
    //         <label id="label">Name:<input type="text" id="inputBox"></input><button id="updateBtn"
    //         onClick={
    //             () => {
    //                 updateUser(props.user.jwt_token, props.user.username)
                    
    //             }
    //         }>Update name</button></label>

    //         <label id="label">Email:<input type="email" id="inputBox"></input><button id="btn">Change email</button></label>
    //         <label id="label">Password:<input type="password" id="inputBox"></input><button id="btn">Change password</button></label>
    //         <button id="deleteBtn"
    //             onClick={
    //                 () => { deleteUser(props.user.jwt_token, props.user.username);
    //                 navigate("/")}}
    //             > DELETE ACCOUNT</button >
              
    //     </div >


