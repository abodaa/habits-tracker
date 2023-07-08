import { CgMenuGridO, CgProfile } from "react-icons/cg";
import { GrRun } from "react-icons/gr"
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsArrowBarRight } from "react-icons/bs";
import { SlArrowDownCircle } from "react-icons/sl";
import Footer from '../components/Footer'

import menuImage from "../images/menu.png";
import profPic from "../images/user.png";
import searchIcon from "../images/search.png";
import logo from "../images/logo.png";
import heroImage from "../images/hero.png";

import "../style/home.css";

export default function Home() {
  return (
    <div className="App">
      {/* Header */}

      <div className="home-main-container">
        <section className="hero-main-container">
          <div className="hero-left-container">
            <img src={heroImage} className="hero-img" alt="" />
            <div className="hero-top-description">
              <GrRun style={{ fontSize: "1.5rem" }} />
              <p>Keep on going</p>
            </div>
            <div className="hero-bottom-description">
              <FaHandHoldingHeart style={{ fontSize: "1.2rem" }} />
              <p>You got this</p>
            </div>
          </div>

          <div className="hero-right-container">
            <div className="hero-right-notification-btn">
              <p className="hero-btn">Start today</p>
              <p className="hero-btn">Be consistent</p>
              <p className="hero-btn">Set a goal</p>
              <p className="hero-btn">Make a habit</p>
            </div>
            <header className="App-header">
              <h1>Build Better Habits, Build a Better Life</h1>
            </header>

            <p className="hero-right-description">
              Harness the power of our personalized habit tracker app to
              streamline your everyday routines and achieve your goals.
            </p>

            <div className="hero-btns-container">
              <button className="hero-btn-one">
                {" "}
                Start today
                <BsArrowBarRight style={{ fontSize: "1.2rem" }} />
              </button>
              <button className="hero-btn-two">
                Learn more
                <SlArrowDownCircle style={{ fontSize: "1.2rem" }} />
              </button>
            </div>
          </div>
        </section>
        
      </div>
      <Footer />
    </div>
  );
}
