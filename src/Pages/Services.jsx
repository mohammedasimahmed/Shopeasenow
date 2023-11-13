import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router";

const Services = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />

      <div className="flex w-full h-full justify-around p-20">
        <div className="flex w-72 h-60 cursor-pointer" style={{ border: "1px solid white" }}>
          <h1 style={{ fontSize: "1.5rem" }} className="font-semibold mx-auto">email spam detection</h1>
        </div>
        <div className="flex w-72 h-60 cursor-pointer" style={{ border: "1px solid white" }} onClick={()=>navigate("/videoCall")}>
        <h1 style={{ fontSize: "1.5rem" }} className="font-semibold mx-auto">video calling</h1>
        </div>
      </div>
    </>
  );
};

export default Services;
