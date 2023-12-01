import Navbar from "../Components/Navbar";
import React from "react";

const Admin = () => {
  const [allUsers, setAllUsers] = React.useState([]);

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
    <div className="flex flex-col md:flex-row">
      <Navbar />
      <div className="md:w-2/3 p-4">
        <button
          onClick={getAllUsers}
          className="px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
        >
          Get All Users
        </button>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">S.No</th>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Latitude</th>
              <th className="px-4 py-2">Longitude</th>

            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => (
              <tr key={user._id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{user._id}</td>
                <td className="border px-4 py-2">{user.UserName}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.latitude}</td>
                <td className="border px-4 py-2">{user.longitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
