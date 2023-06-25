const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res
        .status(StatusCodes.PARTIAL_CONTENT)
        .json({ msg: "Please provide Username, Email and Password" });
    }

    const user = await User.create({...req.body});
    const token = await user.createJWT()
    res.status(StatusCodes.CREATED).json({user: {name: user.username}, token});
  } catch (error) {
    console.log(error);
  }
};

const login = (req, res) => {
  res.send("Login User");
};

module.exports = { register, login };
