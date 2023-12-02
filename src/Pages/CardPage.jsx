import Navbar from '../Components/Navbar'
import { motion } from 'framer-motion'
import CardClothes from '../Components/CardClothes';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader';
import Cookies from 'js-cookie';

const CardPage = () => {
    const { productId } = useParams();
    const [cardData, setCardData] = useState({});
    const [similarData, setSimilarData] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [similarProductsLoading, setSimilarProductsLoading] = useState(true);
    const [formData, setFormData] = useState({
        comment: ""
    })
    const location = useLocation();
    const productType = new URLSearchParams(location.search).get('productType');

    const dishDetails = {
        title: 'Biryani',
        chef: 'Shishiro',
        likes: 25,
        description: 'Delicious Biryani dish made with the finest ingredients. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.',
        imageUrl: 'https://example.com/biryani-image.jpg',
    };
    const fetchData = async () => {
        try {
            setSimilarProductsLoading(true);
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/product/category/?productType=${productType}`, {
                method: "GET",
                credentials: "include"
            });
            const data = await response.json();
            setSimilarData(data);
            console.log("Products fetched successfully");
        } catch (error) {
            console.error("Error", error.message);
        } finally {
            setSimilarProductsLoading(false);
        }
    };


    const fetchCardData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/product/getSingle/${productId}`, {
                method: "GET",
                credentials: 'include',
            });

            const data = await response.json()
            setCardData(data)
        } catch (error) {
            console.log("Error while fetching the data");
        }
        finally {
            setIsLoading(false);
        }
    }

    const addComment = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/product/comment/${productId}/${Cookies.get('userId')}`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error("Error while adding the comment", error);
        }
    };


    useEffect(() => {
        fetchCardData();
        fetchData()
    }, [productId]);
    const cardClothesData = [
        { productName: 'Biryani', userName: `Bala`, distance: 120, roles: "food" },
        { productName: 'POLO', userName: "Saketh", distance: 20, roles: "clothes" },
        { productName: 'Citrazen', userName: "DOLO", distance: 50, roles: "medicine" },
        { productName: 'Phone', userName: "Akhil", distance: 50, roles: "other" },
        { productName: 'Mutton', userName: "tharun", distance: 50, roles: "food" },
        { productName: 'Denim', userName: "Bala", distance: 50, roles: "clothes" },
        { productName: 'Dolo', userName: "Sheshu", distance: 50, roles: "medicine" },
        { productName: 'Biryani', userName: "Trendsetter", distance: 50, roles: "food" },
    ];


    return (
        <div className='flex flex-row bg-gray-800  '>
            <Navbar />
            <div className="antialiased bg-gray-800 overflow-x-auto max-w-screen-xl mx-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                    <div className="flex flex-col items-center justify-center md:flex-row -mx-4 bg-gray-800 rounded-lg">
                        <div className="p-4 border-b-4 border-[#37FF8B] rounded-md">
                            <div className='h-64 md:h-80 rounded-lg mb-4'>
                                <img
                                    src={`data:image/png;base64,${cardData.productImage}`}
                                    alt=''
                                    className='h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center ' />
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="mb-2 leading-tight tracking-tight font-bold text--800 text-2xl md:text-3xl">{cardData.productName}</h2>
                            <p className="text-gray-500 text-sm">By <a href="#" className="text-[#37FF8B] hover:underline">{cardData.userName}</a></p>
                            <p className="text-gray-500 ">{cardData.description}</p>

                            <div className="flex py-4 space-x-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    type="submit"
                                    className="dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-[#51D6FF]"
                                >
                                    Add to cart
                                </motion.button>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <aside>
                            <h2 className="max-w-5xl m-4 text-lg lg:text-2xl font-bold text-gray-800 dark:text-white">Similar Products</h2>
                            {
                                similarProductsLoading ?
                                    <Loader />
                                    :
                                    <div className="flex space-x-4 p-2 overflow-x-auto">
                                        <div className="flex" style={{ width: `${cardClothesData.length * 320}px` }}>
                                            {similarData.map((data, index) => (
                                                <div key={index} className="w-80 mx-4">
                                                    <CardClothes
                                                        productId={data._id}
                                                        productName={data.productName}
                                                        userName={data.userName}
                                                        distance={60}
                                                        role={data.productType}
                                                        image={data.productImage}
                                                        createdAt={data.createdAt}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                            }

                        </aside>

                    </div>
                </div>
            </div>
        </div >

    );
};

export default CardPage;