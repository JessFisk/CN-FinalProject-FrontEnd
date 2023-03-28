import { writeCookie } from "../common";

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

// const upBook = async (req, res) => {
//     try{
    
//     console.log(req.body)
    
//     const bookUpdated = await Book.update({author:req.body.newAuthor},{
//     where: {
//         title: req.body.title,
        
//     }
//     });
//         res.status(201).json({message: "book updated", books: bookUpdated})
//     }catch(error){
//         res.status(501).json({errorMessage: error.message, error: error});
    
//     }
//     }




export const updateUser = async (jwt_token, username, email, password, e) => {

    try {

        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/users/updateusername`,
            {
                method: "PUT",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${jwt_token}`
                },
                body: JSON.stringify({
                    username: username,
                    email: email, 
                    password: password,
                })

            }

        );
        const data = await response.json()

        e.target.reset();
        return data;
    } catch (error) {
        console.log(error)
    }
}


export const deleteUser = async (e, jwt_token, username) => {

    try {

        const response = await fetch(
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
        const data = await response.json()
        

        e.target.reset();
        return data;
    } catch (error) {
        console.log(error)
    }

}








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

