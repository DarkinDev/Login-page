const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");

router.post("/signup", AuthController.SignUp);
router.post("/login", AuthController.LogIn);
router.post("/refresh", AuthController.RefreshToken);
router.post("/logout", AuthController.LogOut);

module.exports = router;
