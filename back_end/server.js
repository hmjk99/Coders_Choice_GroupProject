const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Posts = require("./models/posts.js")

const app = express();
app.use(cors())
app.use(express())
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

app.post('/', (req, res)=>{
  Posts.create(req.body).then((createdModel)=>{
    res.json(createdModel)
  })
})

app.delete('/:id', (req, res)=>{
  Posts.findByIdAndRemove(req.params.id).then((deletedModel)=>{
      res.json(deletedModel)
  })
})

app.put('/:id', (req, res)=>{
  Posts.findByIdAndUpdate(req.params.id, req.body).then((updatedModel)=>{
      res.json(updatedModel)
  })
})



const db = mongoose.connection;
const port = 3000;
app.listen(port, () => `Server running on port port 🔥`);
mongoose.connect("mongodb://localhost:27017/food_posts");
mongoose.connection.once("open", () => {
  console.log("connected to mongod...");
});