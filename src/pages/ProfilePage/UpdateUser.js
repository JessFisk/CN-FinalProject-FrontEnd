import { useState } from "react";
import {updateUser} from "../../../utils/user";

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
        <div>
            <p>This has worked?</p> 
        </div>

    )
}