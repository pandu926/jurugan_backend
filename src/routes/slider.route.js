const express = require("express");
const sliderRouter = express.Router();
const sliderController = require("../controllers/slider.controller");
const tokenVerification = require("../middleware/tokenVerification")

sliderRouter.get("/slider", sliderController.getAll);
sliderRouter.get("/slider/:id", sliderController.getById);
sliderRouter.post("/slider",tokenVerification, sliderController.create);
sliderRouter.put("/slider/:id",tokenVerification, sliderController.update);
sliderRouter.delete("/slider/:id",tokenVerification, sliderController.delete);
module.exports = sliderRouter;
