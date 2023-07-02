import { CgMenuGridO, CgProfile } from "react-icons/cg";
import profPic from "./images/user.png";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";

import Navbar from "./components/navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
