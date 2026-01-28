const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  // THIS FUNCTION IS CALLED AS REQUEST HANDLER
  res.send("test SERVER IS RUNNING");
});
app.use("/hello", (req, res) => {
  // THIS FUNCTION IS CALLED AS REQUEST HANDLER
  res.send("hello SERVER IS RUNNING");
});
app.use((req, res) => {
  // THIS FUNCTION IS CALLED AS REQUEST HANDLER
  res.send("SERVER IS RUNNING");
});
app.listen(3000, () => {
  console.log("server started successfully");
});
