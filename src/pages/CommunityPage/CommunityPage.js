import React from "react";
import { useState, useEffect } from "react";
import { getAllUsers } from "../../utils/user";
import "./CommunityPage.css"
// import {img1} from "https://t3.ftcdn.net/jpg/01/77/54/02/360_F_177540231_SkxuDjyo8ECrPumqf0aeMbean2Ai1aOK.jpg"
// const images = [
//     "https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=800",
//     "https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=800",
//     "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=800",
//     "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=800",
//     "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=800",
//     "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
//     "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=800"
// ]

const CommunityPage = (props) => {
    // const [user, setUser] = useState([])
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
    const fetchUsers = async () => {
      if (props.user){
        const userData = await getAllUsers();
        setUsers(userData);
      }
    }
    fetchUsers();
    }, []);

if (!props.user){
  <div className="no-sign-wrap">
  return <p id="nolog-msg">Please login in or register to view other users</p>
  </div>
}
// Need to map the images and the users at the same time - try a div?
  return(
    props.user &&
    <div className="usersInfo-wrap">
      {/* <div className="usersPic">
        {images.map((URL, index) =>
        <img alt="profile images" src={URL} key={index} id="profile_pictures" />
        )}
      </div> */}
      {/* {images.map((URL, index) =>
        <img alt="profile images" src={URL} key={index} id="profile_pictures" />
        )} */}
        {users ? users.map((users, index) =>
        <p className="usersInfo" key={index}><img src="https://t3.ftcdn.net/jpg/01/77/54/02/360_F_177540231_SkxuDjyo8ECrPumqf0aeMbean2Ai1aOK.jpg" alt="profile silhouette" className="profile_picture"/> <h3 id="userInfoHeader">@{users.username} <br/> {users.email}</h3></p>) : null}
    </div>
  )
  }; //end of CommunityPage funct

  export default CommunityPage;



      // useEffect(() => {
      //     const allUsers = async () =>{
      //     const data = await getAllUsers();       
            
//     return({
//       if (props.user) {
        
//         setUsers(data)
//         return (
//           <div>
//             {users ? users.map((user) => <p>{user.username} <br/> <p>{user.email}</p> </p>) : null}
//           </div>
//         )
//       } else if (!props.user{
//         return (
//           <div>
//            <p>Please sign in or register to see all users</p> 
//            </div>
//         )
//       })

//       }
//     }
    
//     allUsers();
// )
// };

