import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";


const Categories = () => {
    const { loggedIn } = useContext(UserContext);

    return (
        <ul>
            <li className="-z-10 inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:opacity-[0.3] hover:after:bg-[#37FF8B] hover:after:z-[-1]">
                <NavLink
                    data-navbar-item="true"
                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]"
                    aria-current=""
                    to="/browse?productType=Allproducts"
                    target="_blank"
                >
                    ALL PRODUCTS
                </NavLink>
            </li>
            <li className="-z-10 inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:opacity-[0.3] hover:after:bg-[#37FF8B] hover:after:z-[-1]">
                <NavLink
                    data-navbar-item="true"
                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]"
                    aria-current=""
                    to="/browse?productType=Food"
                    target="_blank"
                >
                    FOOD
                </NavLink>
            </li>
            <li className="-z-10 inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:opacity-[0.3] hover:after:bg-[#37FF8B] hover:after:z-[-1]">
                <NavLink
                    data-navbar-item="true"
                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]"
                    aria-current=""
                    to="/browse?productType=Medicine"
                    target="_blank"
                >
                    MEDICINE
                </NavLink>
            </li>
            <li className="-z-10 inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:opacity-[0.3] hover:after:bg-[#37FF8B] hover:after:z-[-1]">
                <NavLink
                    data-navbar-item="true"
                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]"
                    aria-current=""
                    to="/browse?productType=Clothes"
                    target="_blank"
                >
                    CLOTHES
                </NavLink>
            </li>
            <li className="-z-10 inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:opacity-[0.3] hover:after:bg-[#37FF8B] hover:after:z-[-1]">
                <NavLink
                    data-navbar-item="true"
                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]"
                    aria-current=""
                    to="/browse?productType=Pickle"
                    target="_blank"
                >
                    PICKLE
                </NavLink>
            </li>
            <li className="-z-10 inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:opacity-[0.3] hover:after:bg-[#37FF8B] hover:after:z-[-1]">
                <NavLink
                    data-navbar-item="true"
                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]"
                    aria-current=""
                    to="/browse?productType=Other"
                    target="_blank"
                >
                    OTHERS
                </NavLink>
            </li>
        
            {loggedIn && (
                <li className="-z-10 inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:opacity-[0.3] hover:after:bg-[#37FF8B] hover:after:z-[-1]">
                    <NavLink
                        data-navbar-item="true"
                        className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]"
                        aria-current=""
                        to="/cart"
                        target="_blank"
                    >
                        VIEW CART
                    </NavLink>
                </li>
            )}
        </ul>
    )
}
export default Categories;
