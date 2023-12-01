import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Admin = () => {
  const [allUsers, setAllUsers] = useState([]);

  // Use async/await or .then() to handle the asynchronous request
  const getAllUsers = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/auth/admin/users`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await response.json();
      setAllUsers(data.users);
      console.log(data.users);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <button onClick={getAllUsers}>getAllUsers</button>
      {
        allUsers.map((user)=>{
          return(
            <div>
              {user.UserName}
            </div>
          )
        })
      }
    </>
  );
};

export default Admin;
