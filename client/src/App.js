import { CgMenuGridO, CgProfile } from "react-icons/cg";
import menuImage from './images/menu.png'
import profPic from "./images/user.png";
import searchIcon from "./images/search.png";
import logo from "./images/logo.png";




export default function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav-container">
        <img src={logo} alt="" className="logo" />

        <div className="input-container">
          <input type="text" placeholder="Enter your habit name ..." />
          <img src={searchIcon} alt="" className="search-icon" />
        </div>

        <div className="menu-profpic-container">
          <img src={menuImage} alt="" className="nav-imgs" />
          {/* <img src={profPic} alt="" className="nav-imgs" /> */}
          <p>Log in</p>
          <p>Sign up</p>
        </div>
      </nav>

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
        <button>Achieved</button>
        <button>Pending</button>
        <button>Cancelled</button>
        <button>New</button>
      </div>
    </div>
  );
}
