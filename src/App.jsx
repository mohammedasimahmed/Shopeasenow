import { Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero.jsx";
import Signup from "./Pages/SignUp.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
