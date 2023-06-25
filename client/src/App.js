import { CgMenuGridO, CgProfile } from "react-icons/cg";
import menuImage from './images/menu.png'
import profPic from "./images/user.png";
import searchIcon from "./images/search.png";



export default function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav-container">
        <img src={menuImage} alt="" className="nav-imgs" />
        <div className="input-container">
          <input type="text" placeholder="Enter your habit name ..." />
          <img src={searchIcon} alt="" className="search-icon" />
        </div>

        <img src={profPic} alt="" className="nav-imgs" />
      </nav>

      {/* Header */}
      <header className="App-header">
        <h1>Track your HABITS easily!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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
