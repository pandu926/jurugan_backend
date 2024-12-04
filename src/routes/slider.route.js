const express = require("express");
const sliderRouter = express.Router();
const sliderController = require("../controllers/slider.controller");
sliderRouter.get("/slider", sliderController.getAll);
sliderRouter.get("/slider/:id", sliderController.getById);
sliderRouter.post("/slider", sliderController.create);
sliderRouter.put("/slider/:id", sliderController.update);
sliderRouter.delete("/slider/:id", sliderController.delete);
module.exports = sliderRouter;
