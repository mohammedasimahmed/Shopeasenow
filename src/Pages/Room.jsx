import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";

const Room = ({ room, playVideo, handleSubmit, videoRef1, stopVideo ,startVideo }) => {
  useEffect(() => {
    // stopVideo()
    playVideo();
    // stopVideo()
    handleSubmit();
  }, []);

  

  return (
    <>
    <Navbar />
      <center>
        <h1 className="text font-bold text-lg">In Room {room}</h1>
      </center>
      <div className="flex flex-wrap p-3" id="videoContainer" >
        <video
          autoPlay
          ref={videoRef1}
          className="Myvideo m-8"
          height="300"
          width="300"
        ></video>
      </div>
    </>
  );
};

export default Room;
