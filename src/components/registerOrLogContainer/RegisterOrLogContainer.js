import React from "react";
import "../registerOrLogContainer/RegisterOrLogContainer.css";

import Login from "./login/Login";

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
        </div>
    </>
);
};

export default RegisterOrLogContainer;
