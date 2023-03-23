import { writeCookie } from "../common";

export const registerUser = async (e, username, password) => {
    console.log(username, password)
    try {
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/users/register`,
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body:
                    JSON.stringify({
                        username: username,
                        password: password,
                    }),
                }
             );

             const data = await response.json();
             writeCookie("jwt_token", data.user.token, 14);

             e.target.reset();
             return data;
    } catch (error) {
        console.log(error)
    }
    };

export const login = async (e, username, password) => {
    console.log("login function called")

    try {
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/users/loginuser`,
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
        const data = await response.json();
        console.log("login data", data);
        writeCookie("jwt_token", data.user.token, 14);

        e.target.reset();
        return data;
    } catch (error) {
        console.log(error)
    };
};

export const authCheck = async (jwt_token) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/users/authcheck`,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization :`${jwt_token}`
                },
            }
        );

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    };
};

