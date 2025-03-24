const express = require("express");

const db = require('../db')

const router = express.Router();

// CRUD REST API users
// CREATE - POST /
router.post("/", (req, res) => {
  const { username } = req.body;

  db.users.push(username);

  res.status(201).json({
    message: "User created!",
  });
});

// READ ALL - GET /
router.get("/", (req, res) => {
  res.status(200).json({
    message: "List of users",
    users: db.users,
  });
});

// READ ONE - GET /:id
router.get("/:id", (req, res) => {
  res.status(200).json({
    message: "User found!",
    user: db.users.find((usr) => usr === req.params.id),
  });
});

// UPDATE - PUT /:id
// router.put('/:id', (req, res) => {
// })

// DELETE - DEL /:id
// router.delete('/:id', (req, res) => {
// })

module.exports = router;
