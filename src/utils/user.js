import { writeCookie } from "../common";

export const registerUser = async (e, username, password) => {
    console.log(username, password)
    try {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/users/register`,
                { //don't understand the error here?
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
            // https://cn-finalproject-backend.onrender.com
            `http://localhost:5001/users/loginuser`,
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

