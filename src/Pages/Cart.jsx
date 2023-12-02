import Navbar from "../Components/Navbar";
import Location from "../Components/location";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../Components/Loader";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";


const Browse = () => {
  const [cardData, setCardData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const productType = new URLSearchParams(location.search).get("productType");

  const fetchUrl = productType
    ? `http://localhost:9000/api/product/category?productType=${productType}`
    : `http://localhost:9000/api/product/getAll/`;

  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setCardData([...data]);
        setAllProducts([...data]);
        setLoading(false);
        setDataFetched(true);
        console.log("This is the data", cardData)
      } catch (error) {
        console.error("Error", error.message);
        toast.error(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const displayCart = async () => {
    const fetchproduct = `${import.meta.env.VITE_BASE_URL}/api/cart/${Cookies.get("userId")}`

    try {
      const response = await fetch(fetchproduct)
      const data = response.json()
      console.log("This is data", data)
    } catch (error) {
      console.error("Error", error.message)
      toast.error(error.message)
    }
  }

  const handleDelete = async (cartProduct) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/cart/${Cookies.get("userId")}/${cartProduct}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        console.log("Product deleted from cart successfully");
      } else {
        console.error(`Error deleting product from cart. Status: ${response.status}`);
        toast.error("Error deleting product from cart");
      }
    } catch (err) {
      console.error("Error", err.message);
      toast.error(err.message);
    }
  };


  const handleCheckout = () => {
    setCardData([])
    setAllProducts([])

  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-row gap-3">
          <Navbar />
          <Location />
          <div>
            <div className="m-4 flex flex-col ">
              <h1 className="p-3 font-semibold text-2xl">
                VIEW PRODUCTS
              </h1>
              <hr className="m-1 w-full" />
            </div>
            <div>
              <ul className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {cardData.map((data, index) => (
                  <li key={index} className="m-5">
                    <div
                      id="Card"
                      className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:md-w-sm"
                    >
                      <div className="w-[100%] h-[300px] overflow-hidden object-cover">
                        <img
                          src={`data:image/png;base64,${data.productImage}`}
                          alt=""
                          width="500"
                          height="600"
                          className="hover:scale-105 hover:rounded-lg ease-in-out duration-[350] transition-all rounded-lg"
                        />
                      </div>
                      <div id="Details">
                        <div className="flex justify-between items-center mx-2 my-1">
                          <div>
                            <NavLink
                              to={`/card/${data._id}?productType=${data.role}`}
                              className="inline-flex items-center"
                            >
                              {data.productName}
                            </NavLink>

                          </div>
                          <div id="Profile" className="flex items-center">
                            <button>
                              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#fff">
                                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          type="submit"
                          className=" w-full px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-[100%] lg:w-[100%] dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
                        >
                          View Product
                        </motion.button>
                      </div>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mb-3 w-full px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-[100%] lg:w-[100%] dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
              onClick={handleCheckout}
            >
              <Link to="/browse">
                CHECKOUT
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Browse;
