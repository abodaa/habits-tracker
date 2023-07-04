import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import "../style/dashboard.css";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";


const cookies = new Cookies();
let token = cookies.get("TOKEN");

export default function Dashboard() {
  const [habits, setHabits] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/habit", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setHabits(res.data.habits);
        console.log(res.data.habits);
      });
  }, []);

  return (
    <div>
      <div className="App">
        {/* Header */}
        <header className="dashboard-header">
          <h1>Build Better Habits, Build a Better Life</h1>
          <p>
            Harness the power of our personalized habit tracker app to
            streamline your everyday routines and achieve your goals.
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

      <div style={{ marginTop: "3rem" }} className="habit-main-container">
        {habits.map((habit) => {
          return (
            <div key={habit.id} className="habit-container">
              <div className="title-status-container">
                <h3>{habit.title}</h3>
                <p
                  className="habit-status"
                  style={{
                    color:
                      habit.status === "achieved"
                        ? "green"
                        : habit.status === "on progress"
                        ? "#8B8000"
                        : habit.status === "cancelled"
                        ? "red"
                        : habit.status === "new"
                        ? "black"
                        : "black",
                  }}
                >
                  {habit.status.toUpperCase()}
                </p>
              </div>
              <div className="title-status-container">
                <h4>Started</h4>
                <p>{new Date(habit.createdAt).toDateString()}</p>
              </div>
              <div className="title-status-container">
                <h4>End Date</h4>
                <p>{new Date(habit.enddate).toDateString()}</p>
              </div>
              <div className="title-status-container">
                <h4>Time to achieve</h4>
                <p>3 weeks</p>
              </div>
              <div className="progress-bar"></div>
              <div className="Motivation-text">You got this</div>
              <div className="icons-container">
                <LiaEditSolid
                  className="icons"
                  style={{ fontSize: "1.2rem", color: "#484b6a" }}
                />
                <MdDeleteOutline
                  className="icons"
                  style={{ fontSize: "1.2rem", color: "#484b6a" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


// <h1>{habit.title}</h1>
// <h1>{habit.createdAt}</h1>
// <h1>{habit.status}</h1>
// <h1>{habit.enddate}</h1>