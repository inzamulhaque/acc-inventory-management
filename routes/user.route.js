const express = require("express");
const userController = require("../controllers/user.controller");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);
router.get("/signup/confirmation/:token", userController.confirmEmail);
router.get("/me", verifyToken, userController.getMe);

module.exports = router;
