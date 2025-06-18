const express = require("express");
const router = express.Router();
const controller = require("./controllers/auth.controller");

// Signup Router
router.post("/signup", controller.SignUp);

// Login Router
router.post("/login", controller.LogIn);

module.exports = router;
