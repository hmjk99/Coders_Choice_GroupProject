const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express())
app.use(express.json());




app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

const db = mongoose.connection;
const port = 3000;
app.listen(port, () => `Server running on port port 🔥`);
mongoose.connect("mongodb://localhost:27017/food_posts");
mongoose.connection.once("open", () => {
  console.log("connected to mongod...");
});