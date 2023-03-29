import React from "react";
import { useState, useEffect } from "react";
import { getAllUsers } from "../../utils/user";
import { Navigate } from "react-router-dom";
import "./CommunityPage.css"

const CommunityPage = (props) => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
    const fetchUsers = async () => {
      if (props.user){
        const userData = await getAllUsers();
        setUsers(userData);
      }
    }
    fetchUsers();
    }, [props.user]);


if (!props.user){
  return <Navigate to="/login" replace />
}

  return(
    props.user &&
    <div className="usersInfo-wrap">
      <h2 id="communityHeader">Check out other chefs on their Nom journey ...</h2>
        {users ? users.map((users, index) =>
        <p className="usersInfo" key={index}>
          <img src="https://t3.ftcdn.net/jpg/01/77/54/02/360_F_177540231_SkxuDjyo8ECrPumqf0aeMbean2Ai1aOK.jpg" 
          alt="profile silhouette" className="profile_picture"/> 
          <h3 id="userInfoHeader">{users.username} <br/> 
          {users.email}</h3></p>) : null}
    </div>
  )
  };

  export default CommunityPage;

  