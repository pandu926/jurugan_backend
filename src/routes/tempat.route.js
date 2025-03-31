const express = require("express");
const tempatRouter = express.Router();
const tempatController = require("../controllers/tempat.controller");
const tokenVerification = require("../middleware/tokenVerification")

tempatRouter.get("/tempat", tempatController.getAll);
tempatRouter.get("/tempat/:id", tempatController.getById);
tempatRouter.post("/tempat",tokenVerification, tempatController.create);
tempatRouter.put("/tempat/:id",tokenVerification, tempatController.update);
tempatRouter.delete("/tempat/:id",tokenVerification, tempatController.delete);
module.exports = tempatRouter;
