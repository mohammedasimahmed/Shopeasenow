import { Link } from "react-router-dom";
import { NavigationItems } from "./NavigationItems.constants";
const Navbar = () => {
    return (
        <aside className="mt-0">

            <nav className="sticky top-0 flex flex-col justify-between center max-w-[48px]">
                <ul className="Navbar_navList__mg4Oa">
                    {
                        NavigationItems.map((navitems) => (
                            <li key={navitems.id} className="inline-block text-[25px] ml-[10px] px-[0px] py-[20px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[0.9] hover:after:translate-x-[14px] hover:after:opacity-[0.3] hover:after:translate-y-[-15px] hover:after:bg-[#37FF8B] hover:after:z-[-1]">
                                <Link
                                    data-navbar-item="true"
                                    className="p-[15px] font-[500] text-sm no-underline relative transition-all hover:text-[#37FF8B]  z-[80]"
                                    aria-current=""
                                    to={navitems.path}
                                >
                                    {navitems.id}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    );
};

export default Navbar;