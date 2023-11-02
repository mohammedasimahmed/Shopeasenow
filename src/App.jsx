import { Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero.jsx";
import Signup from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
