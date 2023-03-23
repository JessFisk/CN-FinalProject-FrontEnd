import React from "react";
import "../registerOrLogContainer/RegisterOrLogContainer.css";

import Login from "./login/Login";
import Register from "./register/Register";
import LogOut from "./logout/Logout";

const RegisterOrLogContainer =({
    user,
    setUser,
    //other states?
}) => {
return(
    <>
        <div className="Sign-Wrapper">
        <Login
            user = {user}
            setUser = {setUser}
            //other states
        />
        <Register
            user = {user} setUser = {setUser}
        />
        <LogOut
            setUser = {setUser}
        //other state hooks
        />
        </div>
    </>
);
};

export default RegisterOrLogContainer;
