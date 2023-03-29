import { writeCookie, getTokenFromCookie } from "../common";

export const registerUser = async (e, username, email, password) => {
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
                        email: email,
                        password: password,
                    }),
            }
        );

        const data = await response.json();
        console.log(data)
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



export const getAllUsers = async () => {
    try {
        const token = getTokenFromCookie("jwt_token");

        const response = await fetch (`${process.env.REACT_APP_BACKEND_URL}/users/getallusers`,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${token}`
                },
            });

            const data = await response.json();
            return data.users;
    } catch (error) {
        console.log(error);
    }
};



export const authCheck = async (jwt_token) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/users/authcheck`,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${jwt_token}`
                },
            }
        );

        const data = await response.json();
        data.user.token = jwt_token;
        return data.user;
    } catch (error) {
        console.log(error)
    };
};



export const updateUsername = async (jwt_token, newUsername, oldUsername) => {
    try {
        await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/users/updateusername`,
            {
                method: "PUT",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${jwt_token}`
                },
                body: JSON.stringify({
                    username: oldUsername,
                   updateValue: newUsername
                })
            }
        );
        
    } catch (error) {
        console.log (error)
    }
}



export const deleteUser = async (jwt_token, username) => {
    try {
        await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/users/deleteuser`,
            {
                method: "DELETE",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${jwt_token}`
                },
                body: JSON.stringify({
                    username: username,
                   
                })
            }
        );
        
    } catch (error) {
        console.log (error)
    }
}

