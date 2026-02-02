const express = require("express");
const connectDB = require("./config/dataBase");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // creating a new instance of User model
  const user = new User({
    firstName: "Pavan",
    lastName: "Kumar",
    emailId: "pavan@kumar.com",
    password: "abcd",
  });
  try {
    await user.save();
    res.send("User created successfully");
  } catch (err) {
    res.status(400).send("Error saving user" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Data Base connection established");
    app.listen(3000, () => {
      console.log("server started successfully");
    });
  })
  .catch((err) => {
    console.error("DataBase connection failed");
  });
