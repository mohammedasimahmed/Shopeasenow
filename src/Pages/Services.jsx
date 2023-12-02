import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router";
import { Mail, Phone } from "react-feather";

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="flex w-full h-full justify-around p-20">
        <div
          className="flex flex-col w-72 h-60 cursor-pointer items-center justify-center text-center"
          style={{ border: "1px solid white" }}
          onClick={() => navigate("/videoCall")}
        >
          <Phone size={48} color="#4CAF50" />
          <h1 style={{ fontSize: "1.5rem" }} className="font-semibold mt-2">
            Video Calling
          </h1>
        </div>
      </div>
    </>
  );
};

export default Services;
