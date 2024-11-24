const express = require("express");
const userRoute = express.Router();
const userController = require("../controllers/user.controller");
const { authController } = require("../controllers/auth.controller");

userRoute.post("/user", userController.createUser);
userRoute.get("/user/:id", userController.getUserById);
userRoute.put("/user/:id", userController.updateUser);
userRoute.delete("/user/:id", userController.deleteUser);
userRoute.get("/user", userController.getAllUsers);
userRoute.post("/user/auth", authController);

module.exports = userRoute;
