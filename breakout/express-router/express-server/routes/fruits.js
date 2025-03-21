const express = require("express");

const db = require('../db')

const router = express.Router();

// CRUD REST API fruits
// CREATE - POST /
router.post("/", (req, res) => {
  const { name } = req.body;

  db.fruits.push(name);

  res.status(201).json({
    message: "Fruit created!",
  });
});

// READ ALL - GET /api/users
router.get("/", (req, res) => {
  res.status(200).json({
    message: "List of fruits",
    users: db.fruits,
  });
});

// READ ONE - GET /api/users/:id
router.get("//:id", (req, res) => {
  res.status(200).json({
    message: "Fruit found!",
    users: db.users[req.params.id],
  });
});

// UPDATE - PUT //:id
// router.put('//:id', (req, res) => {
// })

// DELETE - DEL //:id
// router.delete('//:id', (req, res) => {
// })

module.exports = router;
