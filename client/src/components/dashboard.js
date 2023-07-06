import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Cookies from "universal-cookie";
import "../style/dashboard.css";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import DeleteConfirmationPopUp from "../components/DeletConfirmationPopUp";
import EditHabit from "../components/EditHabit";


const cookies = new Cookies();
let token = cookies.get("TOKEN");

export default function Dashboard() {
  const [habits, setHabits] = useState([]);
  const [openId, setOpenId] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setOpenId(i);
    setOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        {habits.map((habit, index) => {
          return (
            <div key={habit._id} className="habit-container">
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
                <p>Started</p>
                <p>{new Date(habit.createdAt).toDateString()}</p>
              </div>
              <div className="title-status-container">
                <p>End Date</p>
                <p>{new Date(habit.enddate).toDateString()}</p>
              </div>
              <div className="title-status-container">
                <p>Time to achieve</p>
                <p>3 weeks</p>
              </div>
              <div className="progress-bar"></div>
              <div key={index} className="edit-delete-main-container">
                <div className="icons-container">
                  <p className="Motivation-text">You got this</p>
                  <CiMenuKebab
                    className="icons"
                    style={{ fontSize: "1.2rem", color: "#484b6a" }}
                    onClick={() => handleOpen(habit._id)}
                  />
                </div>
                {openId === habit._id && open && (
                  <div className="edit-delete-icons-container">
                    <EditHabit id={habit._id}/>
                    <DeleteConfirmationPopUp id={habit._id} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
