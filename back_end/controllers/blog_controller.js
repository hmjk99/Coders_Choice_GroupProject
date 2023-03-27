const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const cors = require("cors");
const Posts = require("../models/posts.js");
router.use(express.json())
router.use(cors())

router.get("/", (req, res) => {
  res.send("Server working 🔥");
});

router.post("/", (req, res) => {
  Posts.create(req.body).then((createdModel) => {
    res.json(createdModel);
  });
});

router.delete("/:id", (req, res) => {
  Posts.findByIdAndRemove(req.params.id).then((deletedModel) => {
    res.json(deletedModel);
  });
});

router.put("/:id", (req, res) => {
  Posts.findByIdAndUpdate(req.params.id, req.body).then((updatedModel) => {
    res.json(updatedModel);
  });
});
module.exports = router