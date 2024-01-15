// src/index.ts
import express from "express";
const User = require('./db/models/user');

const app = express();
const port = 4000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Allow requests from this origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow these HTTP methods
  res.header("Access-Control-Allow-Headers", "Content-Type"); // Allow these headers

  // Allow credentials (if needed)
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    // Handle preflight requests
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  console.log('users', users)
  res.send({ users });
});



app.post("/add-user", async (req, res) => {
  // const newUser = {}
  // const users = await User.create({name: "Cristi", email: "elcristi@gmail.com"});
  // console.log('users', users)
  console.log("Use the above code and add a parameter for the user name and email, return the added user and a success state")
  res.send({ data: "TODO" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

