import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./Components/Loader";
import axios from "axios";

const Landing = lazy(() => import("./Pages/LandingPage"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const Login = lazy(() => import("./Pages/LogIn"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const OtpBox = lazy(() => import("./Pages/otp"));
const Browse = lazy(() => import("./Pages/browse"));
const CardPage = lazy(() => import("./Pages/CardPage"));
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
  return (
    <>
      <ToastContainer {...toastConfig} />
      <Suspense fallback={<Loader />}>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/verifyemail/:userId/productType/"
            element={<OtpBox />}
          />
          <Route path="/browse" element={<Browse />} />
          <Route path="/card/:productId" element={<CardPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
