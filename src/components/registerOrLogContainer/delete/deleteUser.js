import { useState } from "react";

const deleteUser = ({setUser}) => {

    const deleteHandler = async (e, setUser) => {

        e.preventDefault();

        try {
            const userData = await login(e, username, password);
    
            if (userData.message === "success") {
                deleteUser(userData.user);
            
            }
        } catch (error){
            console.log("error")
        }
    };
    return(
        <div className="deleteContainer">
      
           
            <button
             type="submit" 
             id="deleteBtn"
             onClick={(e) => deleteHandler(e, setUser)}>Delete User</button>
       
    </div>

    )
}

export default deleteUser;