import TestImage from "../assets/pexels-rajesh-tp-1624487.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const CardClothes = (props) => {
  const [userData, setUserData] = useState([]);
  const [time, setTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });

  async function addToCart() {
    try {
      const userId = Cookies.get("userId");
      const { productName, image } = props;
      console.log("This is the props", props)
      console.log("This is the userid")
      const resp = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/cart/${userId}`,
        { userId, cartProduct: productName, cartImage: image, quantity: 1 }
      );
      console.log("This is the response data", resp.data);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }


  useEffect(() => {
    setUserData(props);
    timer();
  }, []);

  const timer = () => {
    const presentTime = new Date();
    sessionStorage.setItem("currentTime", presentTime);
    const currentTime = new Date(sessionStorage.getItem("currentTime"));
    const targetTime = new Date(currentTime.getTime() + 12 * 60 * 60 * 1000);

    const updateTimer = () => {
      const currentTime = new Date();
      const timeDifference = targetTime - currentTime;

      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTime({
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });

      if (timeDifference <= 0) {
        clearInterval(timerInterval);
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
  };
  return (
    <div
      id="Card"
      className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:md-w-sm"
    >
      <div className="w-[100%] h-[300px] overflow-hidden object-cover">
        <img
          src={`data:image/png;base64,${userData.image}`}
          alt=""
          width="500"
          height="600"
          className="hover:scale-105 hover:rounded-lg ease-in-out duration-[350] transition-all rounded-lg"
        />
      </div>
      <div id="Details">
        <div className="flex justify-between mx-2 my-1">
          <div>
            <NavLink
              to={`/card/${userData.productId}?productType=${userData.role}`}
              className="inline-flex items-center"
            >
              {userData.role === "Food" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"
                    fill="#fff"
                  />
                </svg>
              ) : userData.role === "Pickle" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"
                    fill="#fff"
                  />
                </svg>
              ) : userData.role === "Medicine" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm0-80h640v-480H160v480Zm240-560h160v-80H400v80ZM160-160v-480 480Zm280-200v120h80v-120h120v-80H520v-120h-80v120H320v80h120Z"
                    fill="#fff"
                  />
                </svg>
              ) : userData.role === "Clothes" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    d="M120-160q-17 0-28.5-11.5T80-200q0-10 4-18.5T96-232l344-258v-70q0-17 12-28.5t29-11.5q25 0 42-18t17-43q0-25-17.5-42T480-720q-25 0-42.5 17.5T420-660h-80q0-58 41-99t99-41q58 0 99 40.5t41 98.5q0 47-27.5 84T520-526v36l344 258q8 5 12 13.5t4 18.5q0 17-11.5 28.5T840-160H120Zm120-80h480L480-420 240-240Z"
                    fill="#fff"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    d="M280-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640v80H160v480h120v80Zm160-100q25 0 42.5-17.5T500-320q0-25-17.5-42.5T440-380q-25 0-42.5 17.5T380-320q0 25 17.5 42.5T440-260Zm-80 100v-71q-19-17-29.5-40T320-320q0-26 10.5-49t29.5-40v-71h160v71q19 17 29.5 40t10.5 49q0 26-10.5 49T520-231v71H360Zm480 0H640q-17 0-28.5-11.5T600-200v-360q0-17 11.5-28.5T640-600h200q17 0 28.5 11.5T880-560v360q0 17-11.5 28.5T840-160Zm-160-80h120v-280H680v280Zm0 0h120-120Z"
                    fill="#fff"
                  />
                </svg>
              )}

              {userData.productName}
            </NavLink>
          </div>
          <div id="Profile" className="flex items-center">
            <Link to="/browse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>{" "}
              {userData.userName}
            </Link>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className=" w-full px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-[100%] lg:w-[100%] dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
          onClick={addToCart}
        >
          Add to Cart
        </motion.button>
      </div>
    </div>
  );
};

export default CardClothes;
