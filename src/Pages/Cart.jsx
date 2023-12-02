import CardClothes from "../Components/CardClothes";
import Navbar from "../Components/Navbar";
import Location from "../Components/location";
import Categories from "../Components/categories";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../Components/Loader";

const Browse = () => {
  const { loggedIn } = useContext(UserContext);
  const [cardData, setCardData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [recommendation, setRecommendation] = useState([]);

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
      } catch (error) {
        console.error("Error", error.message);
        toast.error(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchUrl]);

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
                    <CardClothes
                      productId={data._id}
                      productName={data.productName}
                      userName={data.userName}
                      distance={60}
                      role={data.productType}
                      image={data.productImage}
                      createdAt={data.createdAt}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <button className="mb-3 w-full px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-[100%] lg:w-[100%] dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out">CHECKOUT</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Browse;
