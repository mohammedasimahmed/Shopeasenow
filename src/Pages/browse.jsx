import CardClothes from "../Components/CardClothes";
import ImageSlider from "../Components/ImageSlider";
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
  const [allproducts, setAllProducts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const location = useLocation();
  const [recommendation, setRecommendation] = useState([]);

  const productType = new URLSearchParams(location.search).get("productType");

  const fetchUrl = productType
    ? `${"http://localhost:9000"}/api/product/category/?productType=${productType}`
    : `${"http://localhost:9000"}/api/product/getAll/`;
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
        // console.log(data);
        console.log("Products fetched successfully");
        setLoading(false);
        setDataFetched(true);
      } catch (error) {
        console.error("Error", error.message);
        toast.error(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function filterProducts(productType){
    setCardData(
      allproducts.filter((item)=>item.productType===productType)
    )
    // console.log(allproducts)
    // console.log(productType+ allproducts.filter((item)=>item.productType===productType))
  }
  // filterProducts("AllProducts")

  useEffect(() => {
    if (dataFetched) {
      // window.location.reload();
    }
  }, [dataFetched]);

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <div className="flex flex-row gap-3">
          <Navbar />
          <Location />
          <div>
            {/* <div
              style={{
                width: "100%",
                height: "500px",
                margin: "0px",
                objectFit: "cover",
              }}
              className="py-2 px-2"
            >
              <ImageSlider />
            </div> */}
            <div className="m-4 flex flex-col ">
              {recommendation.length !== 0 && (
                <h1 className="p-3 font-semibold text-2xl">
                  Our Recommendation
                </h1>
              )}
              <div className="flex items-center justify-between sm:flex-row">
                {/* {loggedIn && <Button />} */}

                <Categories filterProducts={filterProducts } />
              </div>

              <hr className="m-1 w-full" />
            </div>
            <div>
              <div className="flex">
                {cardData &&
                  cardData?.map((data, index) => {
                    console.log(cardData)
                    return (
                      <div>
                        <img
                          className="w-96 h-96"
                          src={`data:image/png;base64,${data.productImage}`}
                          alt=""
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Browse;
