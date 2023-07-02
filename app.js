// *********** Requires ************* //
const express = require("express");
const app = express();


// core error************************

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


// *************************888

require("dotenv").config();
app.use(express.json());
const DBconnect = require("./db/connect");
// Middliwares
const authRouter = require("./routes/auth");
const habitsRouter = require("./routes/habit");
const authenticate = require('./middlwares/authentication')

// dynamic port setup
const port = process.env.PORT || 3000;

// Base URL setup
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/habit", authenticate, habitsRouter);

const start = async () => {
  try {
    const connectionURL = process.env.MONGO_URI;
    await DBconnect(connectionURL);
    console.log("DB connected ...");

    app.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
