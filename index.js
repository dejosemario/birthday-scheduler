const express = require("express");
const port = 3000;
const app = express();
const cron = require("node-cron");
const User = require("./models/user.model.js");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.use(morgan("dev"));

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

const sendMessage = () => {
  cron.schedule("*/10 * * * * *", () => {
    console.log("running a task every minute");
  });
};

// sendMessage();

app.post("/api/user", async (req, res) => {
  const { name, email, username } = req.body;
  if (!name || !email || !username) {
    return res.status(400).json({ message: "Please provide all the fields" });
  }
  const user = User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }

    try{
        const newUser = new User({
            name,
            email,
            username
        });
        const savedUser = await newUser.save();
        res.status(201).json({success: true, data: savedUser});

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "An error occured while creating User"
        })
    }

});

app.get("/api/user", async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({success: true, data: users});
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "An error occured while fetching Users"
        })
    }
});
app.get("/", (req, res)=>{
    res.sendFile(path.join(_dirname, "public", "index.html"))
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
