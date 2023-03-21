//import {writeCookie} from "../common"

//export registerUser...

export const login = async (e, username, password) => {
    console.log("login function called")

    try {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/users/login`,
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            }
        );
        console.log("login data", data);
        writeCookie("jwt_token", data.user.token, 14);

        e.target.reset();
        return data;
    } catch (error) {
        console.log(error)
    };
};