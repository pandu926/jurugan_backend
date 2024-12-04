const express = require("express");
const mainRouter = express.Router();
const mainpageController = require("../controllers/mainpage.controller");
const upload = require("../utils/upload");

mainRouter.get("/main", mainpageController.getAll);
mainRouter.get("/main/:id", mainpageController.getById);
mainRouter.post("/main", mainpageController.create);
mainRouter.put("/main/:id", mainpageController.update);
mainRouter.delete("/main/:id", mainpageController.delete);

module.exports = mainRouter;
