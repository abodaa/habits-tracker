import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
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
    <div style={{ marginTop: "10rem" }}>
      {habits.map((habit) => {
       return <h1>{habit.title}</h1>;
      })}
    </div>
  );
}
