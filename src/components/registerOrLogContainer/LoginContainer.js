import React from "react";


import Login from "./login/Login";


const LoginContainer =({
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

export default LoginContainer;

