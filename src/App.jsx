import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./Components/Loader";
import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { io } from "socket.io-client";
import Peer from "peerjs";
import VideoCall from "./Pages/VideoCall";
import Room from "./Pages/Room";

const Landing = lazy(() => import("./Pages/LandingPage"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const Login = lazy(() => import("./Pages/LogIn"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const OtpBox = lazy(() => import("./Pages/otp"));
const Browse = lazy(() => import("./Pages/browse"));
const CardPage = lazy(() => import("./Pages/CardPage"));
const AdminPage = lazy(() => import("./Pages/Admin"));
const Cart = lazy(() => import("./Pages/Cart"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const Profile = lazy(() => import("./Pages/Profile"));
const Services = lazy(() => import("./Pages/Services"));
const ChatBox = lazy(() => import("./Components/chatBox"));
const Navbar = lazy(() => import("./Components/Navbar"));
const PrivateRoutes = lazy(() => import("./PrivateRoute"));

function App() {
  const toastConfig = {
    autoClose: false,
  };

  const [room, setRoom] = useState("");
  const [socket, _] = useState(
    // io("https://video-calling-app-backend.onrender.com")
    io("http://localhost:9000")
  );
  const peerInst = useRef(null);
  const videoRef1 = useRef(null);
  const pid = useRef("");
  const ct = useRef(0);

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
      pid.current = socket.id;
      const peer = new Peer(socket.id);
      // playVideo();
      // handleSubmit()
      socket.on("new_user", (rmId) => {
        console.log("new user with " + rmId);
        handleSubmit2(rmId);
      });

      socket.on("user_left", (data) => {
        console.log(data);
        if (document.getElementById(data))
          document.getElementById(data).remove();
      });

      peer.on("call", function (call) {
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: { echoCancellation: true } })
          .then(function (mediaStream) {
            call.answer(mediaStream);
          });
        call.on("stream", function (stream) {
          const existingIds = Array.from(
            document.querySelectorAll("#videoContainer>video")
          ).map((video) => video.id);

          if (existingIds.includes(call.peer)) {
            return;
          }
          if (ct.current % 2 !== 0) {
            const newVideo = document.createElement("video");
            newVideo.width = "300";
            newVideo.heighti = "300";
            newVideo.setAttribute("autoplay", "true");
            newVideo.setAttribute("class", "rmVideo m-8");
            newVideo.setAttribute("id", call.peer);
            newVideo.srcObject = stream;
            console.log(ct);
            document.querySelector("#videoContainer").appendChild(newVideo);
          }
          ct.current++;
        });
      });
      peerInst.current = peer;
    });
  }, []);

  function leaveRoom() {
    socket.emit("leave_room", localStorage.getItem("room"));
  }

  function handleSubmit() {
    // socket.emit("leave_room", localStorage.getItem("room"));
    // const videos = document.querySelectorAll(".rmVideo");
    // if (videos.length > 0) {
    //   Array.from(videos).forEach((video) => {
    //     video.remove();
    //   });
    // }
    socket.emit("join_room", localStorage.getItem("room"));
  }

  function handleRoomJoin() {
    if (!room) return;
    socket.emit("leave_room", localStorage.getItem("room"));
    const videos = document.querySelectorAll(".rmVideo");
    Array.from(videos).forEach((video) => {
      video.remove();
    });
    socket.emit("join_room", room);
    console.log("hi");
    localStorage.setItem("room", room);
  }

  async function handleSubmit2(rmId) {
    console.log(rmId);
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: { echoCancellation: true },
    });
    const call = peerInst.current.call(rmId, mediaStream, pid.current);
    call.on("stream", function (stream) {
      // const video2 = videoRef2.current;
      // video2.srcObject = stream;
      const existingIds = Array.from(
        document.querySelectorAll("#videoContainer>video")
      ).map((video) => video.id);

      if (existingIds.includes(call.peer)) {
        return;
      }
      if (ct.current % 2 !== 0) {
        const newVideo = document.createElement("video");
        newVideo.width = "300";
        newVideo.height = "300";
        newVideo.setAttribute("autoplay", "true");
        newVideo.setAttribute("id", rmId);
        newVideo.setAttribute("class", `rmVideo`);
        newVideo.srcObject = stream;
        document.querySelector("#videoContainer").appendChild(newVideo);
      }
      ct.current++;
    });
  }

  const errorCallback = function (e) {
    console.log("Reeeejected!", e);
  };

  function stopVideo() {
    const video = videoRef1.current;
    // if (video.srcObject) {
    //   const tracks = video.srcObject.getTracks();
    //   tracks.forEach(track => track.stop());
    //   // video.srcObject = "https://img.freepik.com/premium-photo/black-background-abstract-dark-textured-illustration_6344-44.jpg";
    //   // You can set a dark image as the video source, or simply hide the video element.
    //   // Example 1: Set a dark image as the video source
    //   // video.src = 'path_to_dark_image.jpg';
    //   // Example 2: Hide the video element
    //   // video.style.display = 'none';
    // }
    video.pause();
  }
  function startVideo() {
    const video = videoRef1.current;
    if (video.srcObject) {
      const tracks = video.srcObject.getTracks();
      // tracks.forEach(track => track.pla())
      // video.srcObject = "https://img.freepik.com/premium-photo/black-background-abstract-dark-textured-illustration_6344-44.jpg";
      // You can set a dark image as the video source, or simply hide the video element.
      // Example 1: Set a dark image as the video source
      // video.src = 'path_to_dark_image.jpg';
      // Example 2: Hide the video element
      // video.style.display = 'none';
      // tracks.forEach((track)=>track.play())
      video.play();
    }
  }

  function playVideo() {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (mediaStream) {
          const video = videoRef1.current;
          video.srcObject = mediaStream;
          console.log(mediaStream);
        })
        .catch(errorCallback);
    } else {
      console.log("getUserMedia is not supported in this browser.");
    }
  }

  return (
    <>
      <ToastContainer {...toastConfig} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/verifyemail/:userId/" element={<OtpBox />} />
          <Route path="/card/:productId" element={<CardPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/browse" element={<Browse />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/videoCall"
              element={
                <VideoCall
                  room={room}
                  setRoom={setRoom}
                  handleRoomJoin={handleRoomJoin}
                  leaveRoom={leaveRoom}
                />
              }
            />
            <Route
              path="/room"
              element={
                room ? (
                  <Room
                    room={room}
                    playVideo={playVideo}
                    handleSubmit={handleSubmit}
                    videoRef1={videoRef1}
                    stopVideo={stopVideo}
                    startVideo={startVideo}
                  />
                ) : (
                  <Navigate to="/videoCall" />
                )
              }
            />
            <Route path="/services" element={<Services />} />
          </Route>
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
