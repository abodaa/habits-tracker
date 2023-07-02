import { CgMenuGridO, CgProfile } from "react-icons/cg";
import menuImage from "../images/menu.png";
import profPic from "../images/user.png";
import searchIcon from "../images/search.png";
import logo from "../images/logo.png";
import "../style/home.css";

export default function Home() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1>Build Better Habits, Build a Better Life</h1>
        <p>
          Harness the power of our personalized habit tracker app to streamline
          your everyday routines and achieve your goals.
        </p>
      </header>

      {/* Filter buttons */}
      <div className="filter-buttons">
        <button>New</button>
        <button>On Progress</button>
        <button>Cancelled</button>
        <button>Achieved</button>
      </div>
    </div>
  );
}
