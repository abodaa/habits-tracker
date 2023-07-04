import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { VscAdd } from "react-icons/vsc";
import { useState } from "react";
import axios from "axios";

import Cookies from "universal-cookie";
const cookies = new Cookies();
let token = cookies.get("TOKEN");

export default function AddHabit() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [enddate, setEnddate] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (title) {
        const res = await axios.post("http://localhost:3000/api/v1/habit",
          {
            title: title,
            enddate: enddate,
          }, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        console.log(res);

        window.location.href = "/Dashboard";
      } else {
        alert("Please provide all info");
      }
    } catch (error) {
             console.log(token);

    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="add-habit-filter" onClick={handleClickOpen}>
        <VscAdd />
        Add habit
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <input
            required
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title of habit ..."
          />
          <input
            required
            type="date"
            name="enddate"
            value={enddate}
            onChange={(e) => setEnddate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
