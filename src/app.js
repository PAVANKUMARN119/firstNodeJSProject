const express = require("express");
const connectDB = require("./config/dataBase");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  // console.log("logdbbbb", req.body);
  // creating a new instance of User model
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User created successfully");
  } catch (err) {
    res.status(400).send("Error saving user" + err.message);
  }
});

//getting specific user via emailId
app.get("/getUser", async (req, res) => {
  // const userEmail = req.body.emailId; // avoid body for get requests instead use query or param ways
  const userEmail = req.query.emailId;
  try {
    const getUser = await User.find({ emailId: userEmail });
    res.send(getUser);
  } catch (err) {
    res.status(400).send("Something Went Wrong" + err.message);
  }
});

//getting all users
app.get("/getAllUsers", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
    if (!users) {
      res.status(404).send("user not found");
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//deleting a user
app.delete("/deleteUser", async (req, res) => {
  const userId = req.body.emailId;
  try {
    await User.findOneAndDelete(userId);
    res.send("User Deleted successfully");
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});

//updating a user by id
app.post("/updateUserById", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("updated user successfully");
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});

//updating a user by emailId....
app.patch("/updateUser", async (req, res) => {
  const emailId = req.body.emailId;
  const data = req.body;
  try {
    const user = await User.findOneAndUpdate({ emailId: emailId }, data);
    res.send("updated user successfully");
  } catch (err) {
    res.status(400).send("something went wrong");
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
