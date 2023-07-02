import { CgMenuGridO, CgProfile } from "react-icons/cg";
import profPic from "./images/user.png";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Login />
    </div>
  );
}
