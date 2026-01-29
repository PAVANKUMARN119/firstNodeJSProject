const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  // THIS FUNCTION IS CALLED AS REQUEST HANDLER
  res.send("test SERVER IS RUNNING");
});

// app.use("/hello/21", (req, res) => {
//   res.send("hello 21 SERVER IS RUNNING");
// });
// app.use("/hello/22", (req, res) => {
//   res.send("hello 22 SERVER IS RUNNING");
// });
// app.use("/hello/23", (req, res) => {
//   res.send("hello 23 SERVER IS RUNNING");
// });
app.get("/hello", (req, res) => {
  res.send("hello SERVER IS RUNNING");
});
app.get("/ab\\?c", (req, res) => {
  res.send("ab?c SERVER IS RUNNING");
});
app.get("/abc/:abcId/:password", (req, res) => {
  // "/abc/:abcId" this is known as req.params
  console.log(req.params);
  res.send({ firstName: "pavan", lastName: "kumar" });
});

app.get("/abc", (req, res) => {
  // /abc?userId here known as req.query
  console.log(req.query);
  res.send({ firstName: "pavan", lastName: "kumar" });
});

// app.use((req, res) => {
//   res.send("SERVER IS RUNNING");
// });

///The below is for multiple route handlers

app.use(
  "/newRoute",
  [
    (req, res, next) => {
      console.log("1st route handler");
      next();
    },
    (req, res, next) => {
      console.log("2nd route handlers");
      next();
    },
  ],
  (req, res) => {
    console.log("3rd route handlers");
    res.send("3rd route handler server");
  },
);
app.listen(3000, () => {
  console.log("server started successfully");
});
