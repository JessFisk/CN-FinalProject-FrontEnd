import React from "react";
import "./RegisterOrLogContainer.css";

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
    </>
);
};

export default RegisterOrLogContainer;
