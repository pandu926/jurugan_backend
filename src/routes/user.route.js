const express = require("express");
const userRoute = express.Router();
const userController = require("../controllers/user.controller");
const { authController } = require("../controllers/auth.controller");
const tokenVerification = require("../middleware/tokenVerification")

userRoute.post("/user",tokenVerification, userController.createUser);
userRoute.get("/user/:id",tokenVerification, userController.getUserById);
userRoute.put("/user/:id",tokenVerification, userController.updateUser);
userRoute.delete("/user/:id",tokenVerification, userController.deleteUser);
userRoute.get("/user",tokenVerification, userController.getAllUsers);
userRoute.post("/user/auth", authController);

module.exports = userRoute;
