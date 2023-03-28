const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const blogController = require('./controllers/blog_controller.js')
const Posts = require('./models/posts.js')
const app = express();
// app.use('/', blogController)
app.use(cors())
app.use(express())
app.use(express.json());

app.get("/", (req, res) => {
  Posts.find({}).then((foundPost) => {
    res.json(foundPost) 
  })
});

app.post("/", (req, res) => {
  console.log(req.body);
  Posts.create(req.body).then((createdModel) => {
    res.json(createdModel);
  });
});

app.delete("/:id", (req, res) => {
  Posts.findByIdAndRemove(req.params.id).then((deletedModel) => {
    res.json(deletedModel);
  });
});

app.put("/:id", (req, res) => {
  Posts.findByIdAndUpdate(req.params.id, req.body).then((updatedModel) => {
    res.json(updatedModel);
  });
});


const db = mongoose.connection;
const port = 3000;
app.listen(port, () => `Server running on port port 🔥`);
mongoose.connect("mongodb://localhost:27017/food_posts");
