const express = require("express");
const userRoute = express.Router();
const controller = require("../controllers/user.controller");

userRoute.get("/user", (req, res) => {});
userRoute.post("/user/register", controller.addUSer);
userRoute.get("/user/list", controller.getUser);

module.exports = userRoute;
