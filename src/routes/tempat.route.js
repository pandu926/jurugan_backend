const express = require("express");
const tempatRouter = express.Router();
const tempatController = require("../controllers/tempat.controller");
tempatRouter.get("/tempat", tempatController.getAll);
tempatRouter.get("/tempat/:id", tempatController.getById);
tempatRouter.post("/tempat", tempatController.create);
tempatRouter.put("/tempat/:id", tempatController.update);
tempatRouter.delete("/tempat/:id", tempatController.delete);
module.exports = tempatRouter;
