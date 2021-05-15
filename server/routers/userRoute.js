const express = require("express");
const { verifyToken } = require("../controllers/authController");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", verifyToken, userController.allUsers);

router.get("/:id", userController.getUser);

router.patch("/:id", verifyToken, userController.updateUser);

router.delete("/:id", verifyToken, userController.deleteUser);

module.exports = router;
